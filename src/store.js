// @/store.js
import { createStore } from 'vuex';
import { firestore } from '@/firebase';
import { doc, getDoc, updateDoc } from "firebase/firestore";

export default createStore({
  state: {
    portfolio: null,
  },
  mutations: {
    setPortfolio(state, payload) {
      state.portfolio = payload;
    },
    updatePortfolio(state, payload) {
      state.portfolio = { ...state.portfolio, ...payload };
    },
  },
  actions: {
    async fetchPortfolio({ commit }) {
        try {
          const docRef = doc(firestore, "websiteData", "portfolio");
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const portfolioData = docSnap.data();
            commit('setPortfolio', portfolioData);
          } else {
            console.log("No portfolio document found in Firestore!");
          }
        } catch (error) {
          console.error("Error fetching portfolio document: ", error);
        }
      },
    async updatePortfolio({ commit }, payload) {
      try {
        const docRef = doc(firestore, "websiteData", "portfolio");
        await updateDoc(docRef, payload);
        commit('updatePortfolio', payload);
      } catch (error) {
        console.error("Error updating portfolio document: ", error);
      }
    },
  },
  getters: {
    portfolio: (state) => state.portfolio,
  },
});