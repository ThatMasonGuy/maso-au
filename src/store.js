import { createStore } from 'vuex';
import { firestore } from '@/firebase';
import createPersistedState from 'vuex-persistedstate';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { auth } from './firebase';

const store = createStore({
  state: {
    portfolio: null,
    user: null,
  },
  getters: {
    portfolio: (state) => state.portfolio,
    user: (state) => state.user,
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
    logoutUser({ commit }) {
      commit('CLEAR_USER');
      localStorage.removeItem('user');
      sessionStorage.removeItem('user');
      console.log('User has been logged out and persisted state cleared.');
    },
  },
  plugins: [
    createPersistedState({
      paths: ['user'],
      storage: localStorage.getItem('user') ? localStorage : sessionStorage,
    }),
  ],
});

export default store;