import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    login_user: null,
    drawer: false,
    works: []
    // totalTime: {}
  },
  mutations: {
    setLoginUser(state, user) {
      state.login_user = user;
    },
    deleteLoginUser(state) {
      state.login_user = null;
    },
    toggleSideMenu(state) {
      state.drawer = !state.drawer;
    },
    addWork(state, { id, work }) {
      work.id = id;
      state.works.push(work);
    }
    // totalTime(state, time) {
    //   console.log("State :");
    //   console.log(time);
    //   state.totalTime.push(time);
    //   console.log("State :");
    //   console.log(state.totalTime);
    // }
  },
  actions: {
    login() {
      const google_auth_provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(google_auth_provider);
    },
    logout() {
      firebase.auth().signOut();
    },
    setLoginUser({ commit }, user) {
      commit("setLoginUser", user);
    },
    deleteLoginUser({ commit }) {
      commit("deleteLoginUser");
    },
    toggleSideMenu({ commit }) {
      commit("toggleSideMenu");
    },
    addWork({ getters, commit }, work) {
      if (getters.uid) {
        firebase
          .firestore()
          .collection(`works/${getters.uid}/work`)
          .add(work)
          .then(doc => {
            commit("addWork", { id: doc.id, work });
          });
      }
    },
    fetchWork({ getters, commit }) {
      if (getters.uid) {
        firebase
          .firestore()
          .collection(`works/${getters.uid}/work`)
          .get()
          .then(snapshot => {
            snapshot.forEach(doc =>
              commit("addWork", { id: doc.id, work: doc.data() })
            );
          });
      }
    }
    // totalTime({ getters, commit }, time) {
    //   if (getters.uid) {
    //     firebase
    //       .firestore()
    //       .collection(`works/${getters.uid}/totalTime`)
    //       .add(time)
    //       .then(doc => {
    //         commit("totalTime", { id: doc.id, time });
    //       });
    //   }
    // },
    // fetchTime({ getters, commit }) {
    //   if (getters.uid) {
    //     firebase
    //       .firestore()
    //       .collection(`works/${getters.uid}/totalTime`)
    //       .get()
    //       .then(snapshot => {
    //         snapshot.forEach(doc => commit("totalTime", doc.data()));
    //       });
    //   }
    // }
  },
  getters: {
    userName: state => (state.login_user ? state.login_user.displayName : ""),
    photoURL: state => (state.login_user ? state.login_user.photoURL : ""),
    uid: state => (state.login_user ? state.login_user.uid : null)
  }
});
