import { ref } from 'vue';
import { auth, firestore } from './firebase';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut as firebaseSignOut } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import router from './router';
import store from './store';
import { getFunctions, httpsCallable } from 'firebase/functions';

const functions = getFunctions();
const createUserCallable = httpsCallable(functions, 'createUser');
const isAuthenticated = ref(false);
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#%^&/.,><';":])[A-Za-z\d@$!%*?&#%^&/.,><';":]{8,}$/;

export const signUp = async (
  firstName,
  lastName,
  userName,
  emailAddress,
  phoneNumber,
  password,
  confirmPassword,
  country,
) => {
  try {
    console.log('Validating user input');
    if (!emailRegex.test(emailAddress)) {
      throw new Error('Invalid email format');
    }

    if (!passwordRegex.test(password)) {
      throw new Error(
        'Password must be at least 8 characters long, contain at least 1 symbol, 1 number, 1 capital, and 1 lowercase letter'
      );
    }

    if (password !== confirmPassword) {
      throw new Error('Passwords do not match');
    }

    console.log('Trimming input fields');
    firstName = firstName.trim();
    lastName = lastName.trim();
    userName = userName.trim();
    emailAddress = emailAddress.trim();
    phoneNumber = phoneNumber.trim();

    console.log('Calling createUser Cloud Function');
    const result = await createUserCallable({
      firstName: firstName,
      lastName: lastName,
      userName: userName,
      emailAddress: emailAddress,
      phoneNumber: phoneNumber,
      country: country,
      password: password,
    });

    console.log('User created successfully');

    store.commit('SET_USER', {
      uid: result.data.uid,
      firstName: firstName,
      lastName: lastName,
      userName: userName,
      emailAddress: emailAddress,
      phoneNumber: phoneNumber,
      country: country,
      avatarUrl: '',
    });
    
    router.push('/auth/home');
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

export const createUserDocumentWithAdditionalInfo = async (user, additionalInfo) => {
  try {
    if (!user || !additionalInfo) {
      throw new Error('User and additionalInfo are required');
    }

    if (!user.uid) {
      throw new Error('Invalid user');
    }

    const userDocRef = doc(firestore, 'users', user.uid);
    const userDocSnapshot = await getDoc(userDocRef);

    if (userDocSnapshot.exists()) {
      await setDoc(userDocRef, {
        ...userDocSnapshot.data(),
        ...additionalInfo,
        updatedAt: new Date(),
      }, { merge: true });
    } else {
      await setDoc(userDocRef, {
        ...additionalInfo,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    // Fetch the updated user data from Firestore
    const updatedUserDocSnapshot = await getDoc(userDocRef);
    if (updatedUserDocSnapshot.exists()) {
      const updatedUserData = updatedUserDocSnapshot.data();
      return updatedUserData;
    } else {
      throw new Error('Failed to fetch updated user data');
    }
  } catch (error) {
    console.error('Error updating user document:', error);
    throw error;
  }
};

export const signIn = async (emailAddress, password, rememberMe) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, emailAddress, password);
    if (userCredential && userCredential.user) {
      const userDocRef = doc(firestore, "users", userCredential.user.uid);
      const userDocSnap = await getDoc(userDocRef);
      if (userDocSnap.exists()) {
        const userData = userDocSnap.data();
        const requiredFields = ['createdAt', 'userName', 'emailAddress', 'firstName', 'lastName', 'phoneNumber', 'country', 'updatedAt'];
        const missingFields = requiredFields.filter(field => !userData[field]);
        if (missingFields.length > 0) {
          router.push('/additionalinfo')
          sessionStorage.setItem('user', JSON.stringify(userData));
          throw new Error(`User data is missing required fields: ${missingFields.join(', ')}`);
        }
        if (rememberMe) {
          localStorage.setItem('user', JSON.stringify(userData));
        } else {
          sessionStorage.setItem('user', JSON.stringify(userData));
        }
        return { user: userCredential.user, userData };
      } else {
        throw new Error('User data not found in Firestore.');
      }
    } else {
      throw new Error('Authentication failed, no user found.');
    }
  } catch (error) {
    throw error;
  }
};

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    const userDocRef = doc(firestore, "users", user.uid);
    const userDocSnapshot = await getDoc(userDocRef);

    if (userDocSnapshot.exists()) {
      const userData = userDocSnapshot.data();
      const requiredFields = ['createdAt', 'emailAddress', 'firstName', 'lastName', 'country', 'phoneNumber', 'updatedAt'];
      const missingFields = requiredFields.filter(field => !userData[field]);

      if (missingFields.length === 0) {
        return { user, userData };
      } else {
        return { user, missingFields };
      }
    } else {
      const additionalDetails = {
        // Add any additional details you want to set for new users
      };
      await setDoc(doc(firestore, "users", user.uid), additionalDetails);
      return { user };
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const checkAdminStatus = async (user, store) => {
  try {
    const adminEmail = import.meta.env.VITE_ADMIN_EMAIL;

    if (user) {
      const userEmail = user.email;
      const isAdmin = userEmail === adminEmail;

      store.commit('SET_IS_ADMIN', isAdmin);
    } else {
      console.log('User not authenticated.');
      store.commit('SET_IS_ADMIN', false);
    }
  } catch (error) {
    console.error('Error checking admin status:', error);
    store.commit('SET_IS_ADMIN', false);
  }
};

export const initializeAuth = (store) => {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      try {
        const userDocRef = doc(firestore, "users", user.uid);
        const userDocSnapshot = await getDoc(userDocRef);

        if (userDocSnapshot.exists()) {
          const userData = userDocSnapshot.data();
          store.commit('SET_USER', userData);
          await store.dispatch('fetchUserData');
          await checkAdminStatus(user, store);
        } else {
          console.warn('User data not found in Firestore. Retrying in 2 seconds...');
          setTimeout(async () => {
            const retryUserDocSnapshot = await getDoc(userDocRef);
            if (retryUserDocSnapshot.exists()) {
              const userData = retryUserDocSnapshot.data();
              store.commit('SET_USER', userData);
              await store.dispatch('fetchUserData');
            } else {
              console.error('User data not found in Firestore after retry.');
              store.commit('SET_NEW_USER', true);
            }
          }, 2000);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    } else {
      store.commit('SET_USER', null);
      store.commit('SET_IS_ADMIN', false);
    }
    isAuthenticated.value = !!user;
  });
};

export const signOut = async () => {
  try {
    await firebaseSignOut(auth);
    store.dispatch('logoutUser');
    router.push('/login');
  } catch (error) {
    console.error('Error signing out:', error);
    throw error;
  }
};