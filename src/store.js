import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import { auth, firestore, storage } from '@/firebase';
import { doc, getDoc, updateDoc, setDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, listAll } from 'firebase/storage';

const store = createStore({
  state: {
    portfolio: null,
    user: null,
    homeData: null,
    settings: null,
    isLoading: false,
    isNewUser: false,
    isAdmin: false,
    accountingSettings: {
      general: {
        currency: 'AUD',
        gstRegistered: true,
        taxRate: 10,
        invoicePrefix: 'INV-',
        startingNumber: '00001',
        receiveNotifications: false,
      },
      account: {
        businessName: '',
        businessLogo: '',
        businessAddress: '',
        businessPhone: '',
        businessNumber: '',
        bankDetails: {
          accountName: '',
          accountNumber: '',
          bsbNumber: '',
        },
      },
    },
  },
  getters: {
    portfolio: (state) => state.portfolio,
    user: (state) => state.user,
    homeData: (state) => state.homeData,
    settings: (state) => state.settings,
    isLoading: (state) => state.isLoading,
    isNewUser: (state) => state.isNewUser,
    isAdmin: (state) => state.isAdmin,
    accountingSettings: (state) => state.accountingSettings,
  },
  mutations: {
    SET_LOADING(state, isLoading) {
      state.isLoading = isLoading;
    },
    SET_SETTINGS(state, settings) {
      state.settings = settings;
    },
    SET_PORTFOLIO(state, payload) {
      state.portfolio = payload;
    },
    SET_HOME_DATA(state, payload) {
      state.homeData = payload;
    },
    UPDATE_PORTFOLIO(state, payload) {
      state.portfolio = { ...state.portfolio, ...payload };
    },
    SET_USER(state, userData) {
      if (userData) {
        state.user = {
          uid: userData.uid,
          userName: userData.userName,
          emailAddress: userData.emailAddress,
          firstName: userData.firstName,
          lastName: userData.lastName,
          phoneNumber: userData.phoneNumber,
          country: userData.country,
          avatar: userData.avatar,
          createdAt: userData.createdAt,
          updatedAt: userData.updatedAt,
        };
      } else {
        state.user = null;
      }
    },
    SET_NEW_USER(state, isNewUser) {
      state.isNewUser = isNewUser;
    },
    SET_IS_ADMIN(state, isAdmin) {
      state.isAdmin = isAdmin;
    },
    SET_ACCOUNTING_SETTINGS(state, settings) {
      state.accountingSettings = { ...state.accountingSettings, ...settings };
    },
    CLEAR_USER(state) {
      state.user = null;
    },
  },
  actions: {
    async fetchPortfolio({ commit, state }) {
      if (state.portfolio) {
        return;
      }
      try {
        const docRef = doc(firestore, 'websiteData', 'portfolio');
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const portfolioData = docSnap.data();
          commit('SET_PORTFOLIO', portfolioData);
        } else {
          console.log('No portfolio document found in Firestore!');
        }
      } catch (error) {
        console.error('Error fetching portfolio document: ', error);
      }
    },
    async updatePortfolio({ commit }, payload) {
      try {
        const docRef = doc(firestore, 'websiteData', 'portfolio');
        await updateDoc(docRef, payload);
        commit('UPDATE_PORTFOLIO', payload);
      } catch (error) {
        console.error('Error updating portfolio document: ', error);
      }
    },
    async fetchHomeData({ commit, state }) {
      if (state.homeData) {
        return;
      }
      try {
        const docRef = doc(firestore, 'websiteData', 'home');
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const homeDataLive = docSnap.data();
          commit('SET_HOME_DATA', homeDataLive);
        } else {
          console.log('No home document found in Firestore!');
        }
      } catch (error) {
        console.error('Error fetching home document: ', error);
      }
    },
    async fetchUserData({ commit }) {
      try {
        const user = auth.currentUser;
        if (user) {
          const authUID = user.uid;
          const userDocRef = doc(firestore, "users", authUID);
          const userDocSnap = await getDoc(userDocRef);
          if (userDocSnap.exists()) {
            const userData = userDocSnap.data();
            const privateData = userData._PRIVATE_ || {};

            commit('SET_USER', {
              uid: authUID,
              userName: userData.userName,
              emailAddress: userData.emailAddress,
              firstName: userData.firstName,
              lastName: userData.lastName,
              phoneNumber: userData.phoneNumber,
              country: userData.country,
              avatar: userData.avatar,
              createdAt: userData.createdAt,
              updatedAt: userData.updatedAt,
              ...privateData,
            });
          } else {
            console.error('User data not found in Firestore.');
          }
        } else {
          console.error('User is not authenticated.');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    },
    async fetchAccountingSettings({ commit, rootState }) {
      const userId = rootState.user.uid;
      const settingsRef = doc(firestore, `users/${userId}/accounting/details`);
      const settingsSnap = await getDoc(settingsRef);

      if (settingsSnap.exists()) {
        commit('SET_ACCOUNTING_SETTINGS', settingsSnap.data());
      }
    },
    async createOrUpdateAccountingSettings({ commit, rootState }, newSettings) {
      const userId = rootState.user.uid;
      const settingsRef = doc(firestore, `users/${userId}/accounting/details`);
      
      const settingsSnap = await getDoc(settingsRef);
      
      if (settingsSnap.exists()) {
        await updateDoc(settingsRef, newSettings);
      } else {
        await setDoc(settingsRef, newSettings);
      }
      
      commit('SET_ACCOUNTING_SETTINGS', newSettings);
    },
    async uploadLogo({ rootState }, file) {
      const userId = rootState.user.uid;
      const storagePath = `users/${userId}/accounting/myLogo/`;
      const logoRef = ref(storage, storagePath);

      const list = await listAll(logoRef);
      const fileNames = list.items.map(item => item.name);

      let newFileName = 'logo1';
      let index = 1;
      while (fileNames.includes(newFileName)) {
        index += 1;
        newFileName = `logo${index}`;
      }

      const newLogoRef = ref(storage, `${storagePath}${newFileName}`);
      const snapshot = await uploadBytes(newLogoRef, file);
      return await getDownloadURL(snapshot.ref);
    },
    logoutUser({ commit }) {
      commit('CLEAR_USER');
      localStorage.removeItem('user');
      sessionStorage.removeItem('user');
      console.log('User has been logged out and persisted state cleared.');
    },
  },
  plugins: [
    createPersistedState({
      paths: ['user', 'settings', 'portfolio', 'homeData'],
      storage: localStorage.getItem('user', 'settings', 'portfolio', 'homeData') ? localStorage : sessionStorage,
    }),
  ],
});

export default store;