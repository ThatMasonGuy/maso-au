import { auth, firestore } from './firebase';
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import router from './router';
import store from './store';
import { getFunctions, httpsCallable } from 'firebase/functions';

const functions = getFunctions();
const createUserCallable = httpsCallable(functions, 'createUser');

const googleProvider = new GoogleAuthProvider();

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#%^&/.,><';":])[A-Za-z\d@$!%*?&#%^&/.,><';":]{8,}$/;

onAuthStateChanged(auth, async (user) => {
  if (user) {
    try {
      const token = await user.getIdToken();
      store.commit('setAuthToken', token);

      const userDoc = doc(firestore, 'users', user.uid);
      const docSnap = await getDoc(userDoc);

      if (!docSnap.exists()) {
        await setDoc(userDoc, {
          firstName: user.firstName || '',
          lastName: user.lastName || '',
          userName: user.userName || '',
          emailAddress: user.emailAddress,
          phoneNumber: user.phoneNumber || '',
          avatarUrl: user.photoURL || '',
        });
      }

      store.commit('setUser', {
        uid: user.uid,
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        userName: user.userName || '',
        emailAddress: user.emailAddress,
        phoneNumber: user.phoneNumber || '',
        avatarUrl: user.photoURL || '',
      });

      const currentRoute = router.currentRoute.value;
      if (!currentRoute.meta.requiresAuth) {
        // Allow access to public routes
      } else if (currentRoute.meta.requiresAuth && !user) {
        router.push('/login');
      }
    } catch (error) {
      console.error('Error in onAuthStateChanged:', error);
    }
  } else {
    store.commit('clearAuthToken');
    store.commit('clearUser');
    const currentRoute = router.currentRoute.value;
    if (currentRoute.meta.requiresAuth) {
      router.push('/login');
    }
  }
});

export const signUp = async (
  firstName,
  lastName,
  userName,
  emailAddress,
  phoneNumber,
  password,
  confirmPassword
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
      firstName,
      lastName,
      userName,
      emailAddress: emailAddress,
      phoneNumber,
      password,
    });

    console.log('User created successfully');

    store.commit('setUser', {
      uid: result.data.uid,
      firstName,
      lastName,
      userName,
      emailAddress,
      phoneNumber,
      avatarUrl: '',
    });
    
    router.push('/home');
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

export const signIn = async (emailAddress, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, emailAddress, password);
    const user = userCredential.user;
    const token = await user.getIdToken();
    store.commit('setAuthToken', token);
    router.push('/home');
  } catch (error) {
    console.error('Error signing in:', error);
    throw error;
  }
};

export const signInWithGoogle = async () => {
  try {
    const userCredential = await signInWithPopup(auth, googleProvider);
    const user = userCredential.user;
    const token = await user.getIdToken();
    store.commit('setAuthToken', token);

    const userDoc = doc(firestore, 'users', user.uid);
    const docSnap = await getDoc(userDoc);

    if (!docSnap.exists()) {
      await setDoc(userDoc, {
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        userName: user.userName || '',
        emailAddress: user.emailAddress,
        phoneNumber: user.phoneNumber || '',
        avatarUrl: user.photoURL || '',
      });
    }

    store.commit('setUser', {
      uid: user.uid,
      firstName: user.firstName || '',
      lastName: user.lastName || '',
      userName: user.userName || '',
      emailAddress: user.emailAddress,
      phoneNumber: user.phoneNumber || '',
      avatarUrl: user.photoURL || '',
    });

    router.push('/home');
  } catch (error) {
    console.error('Error signing in with Google:', error);
    throw error;
  }
};

export const signOut = async () => {
  try {
    await auth.signOut();
    store.commit('clearAuthToken');
    store.commit('clearUser');
    router.push('/login');
  } catch (error) {
    console.error('Error signing out:', error);
    throw error;
  }
};