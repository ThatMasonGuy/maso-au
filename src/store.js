import { createStore } from 'vuex';
import { firestore } from '@/firebase';
import createPersistedState from 'vuex-persistedstate';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { auth } from './firebase';

export default createStore({
  state: {
    portfolio: null,
    authToken: null,
    user: null,
  },
  mutations: {
    setPortfolio(state, payload) {
      state.portfolio = payload;
    },
    updatePortfolio(state, payload) {
      state.portfolio = { ...state.portfolio, ...payload };
    },
    setAuthToken(state, token) {
      state.authToken = token;
    },
    clearAuthToken(state) {
      state.authToken = null;
    },
    setUser(state, user) {
      state.user = user;
    },
    clearUser(state) {
      state.user = null;
    },
  },
  actions: {
    async fetchPortfolio({ commit, state }) {
      if (state.portfolio) {
        return; // Portfolio data already exists in the store, no need to fetch again
      }
      try {
        const docRef = doc(firestore, 'websiteData', 'portfolio');
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const portfolioData = docSnap.data();
          commit('setPortfolio', portfolioData);
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
        commit('updatePortfolio', payload);
      } catch (error) {
        console.error('Error updating portfolio document: ', error);
      }
    },
    async fetchUser({ commit, state }) {
      if (state.user) {
        return; // User data already exists in the store, no need to fetch again
      }
      try {
        auth.onAuthStateChanged(async (user) => {
          if (user) {
            const userDoc = doc(firestore, 'users', user.uid);
            const docSnap = await getDoc(userDoc);
            if (docSnap.exists()) {
              commit('setUser', docSnap.data());
            }
          } else {
            commit('clearUser');
          }
        });
      } catch (error) {
        console.error('Error fetching user: ', error);
      }
    },
  },
  getters: {
    portfolio: (state) => state.portfolio,
    user: (state) => state.user,
    authToken: (state) => state.authToken,
  },
  plugins: [
    createPersistedState({
      paths: ['authToken', 'user'],
      storage: localStorage.getItem('user') ? localStorage : sessionStorage,
    }),
  ],
});