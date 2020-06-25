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
    works: [],
    totalTime: 0
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
    },
    addTime(state, { time }) {
      // state.totalTime = 0;
      console.log("");
      console.log("- Add & fetch time -");
      console.log("引数 Time : " + time);
      state.totalTime += time;
      console.log("State totalTime : " + state.totalTime);
      console.log("");
    }
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
    },
    addTime({ getters }, time) {
      if (getters.uid) {
        firebase
          .firestore()
          .collection(`works/${getters.uid}/totalTime`)
          .doc("time")
          .set(time, { merge: true });
      }
    },
    fetchTime({ getters, commit }) {
      if (getters.uid) {
        firebase
          .firestore()
          .collection(`works/${getters.uid}/totalTime`)
          .doc("time")
          .onSnapshot(doc => {
            try {
              console.log("");
              console.log("- Snap Shot -");
              console.log("変更を検知しました。");
              console.log("doc.data().time : " + doc.data().time);
              console.log("");
              commit("addTime", { time: doc.data().time });
            } catch (error) {
              console.log(error);
            }
          });
      }
    }
  },
  getters: {
    userName: state => (state.login_user ? state.login_user.displayName : ""),
    photoURL: state => (state.login_user ? state.login_user.photoURL : ""),
    uid: state => (state.login_user ? state.login_user.uid : null)
  }
});
