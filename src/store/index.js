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
    totalTime: 0,
    times: {
      work_sum: 0,
      study_sum: 0,
      task_sum: 0
    },
    profile: {
      target: "",
      limit: ""
    }
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
    addTime(state, times) {
      state.totalTime += times.sum;
      state.times = {
        work_sum: (state.times.work_sum += times.work_sum),
        study_sum: (state.times.study_sum += times.study_sum),
        task_sum: (state.times.task_sum += times.task_sum)
      };
    },
    setProfile(state, profile) {
      state.profile = profile;
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
    setProfile({ getters, commit }, profile) {
      if (getters.uid) {
        firebase
          .firestore()
          .collection(`users/${getters.uid}/profile`)
          .doc("text")
          .get()
          .then(() => {
            firebase
              .firestore()
              .collection(`users/${getters.uid}/profile`)
              .doc("text")
              .set(profile)
              .then(() => {
                commit("setProfile", profile);
              });
          });
      }
    },
    fetchProfile({ getters, commit }) {
      if (getters.uid) {
        firebase
          .firestore()
          .collection(`users/${getters.uid}/profile`)
          .doc("text")
          .onSnapshot(doc => {
            try {
              // 何もない時は初期データ埋め込み
              if (doc.data() === undefined) {
                const profile = {
                  target: "何か目標を決めましょう！",
                  limit: "いつまでにやりますか？"
                };
                commit("setProfile", profile);
              } else {
                commit("setProfile", doc.data());
              }
            } catch (error) {
              console.log("Profile is empty.");
            }
          });
      }
    },
    addWork({ getters, commit }, work) {
      if (getters.uid) {
        firebase
          .firestore()
          .collection(`users/${getters.uid}/work`)
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
          .collection(`users/${getters.uid}/work`)
          .get()
          .then(snapshot => {
            snapshot.forEach(doc =>
              commit("addWork", { id: doc.id, work: doc.data() })
            );
          });
      }
    },
    addTime({ getters }, times) {
      if (getters.uid) {
        firebase
          .firestore()
          .collection(`users/${getters.uid}/totalTime`)
          .doc("time")
          .get()
          .then(doc => {
            if (doc.data() === undefined) {
              // 初回アクセス時、コレクションがない時の挙動
              firebase
                .firestore()
                .collection(`users/${getters.uid}/totalTime`)
                .doc("time")
                .set(times);
              firebase
                .firestore()
                .collection(`AllUsers/${getters.uid}/works`)
                .doc("sum")
                .set(times);
            } else {
              const existingTotalTime = doc.data().sum;
              times = {
                sum: existingTotalTime + times.sum,
                work_sum: times.work_sum,
                study_sum: times.study_sum,
                task_sum: times.task_sum
              };
              firebase
                .firestore()
                .collection(`users/${getters.uid}/totalTime`)
                .doc("time")
                .set(times);
              firebase
                .firestore()
                .collection(`AllUsers/${getters.uid}/works`)
                .doc("sum")
                .set(times);
            }
          });
      }
    },
    fetchTime({ getters, commit }) {
      if (getters.uid) {
        firebase
          .firestore()
          .collection(`users/${getters.uid}/totalTime`)
          .doc("time")
          .onSnapshot(doc => {
            try {
              // 何もない時は初期データ埋め込み
              if (doc.data() === undefined) {
                const times = {
                  sum: 0,
                  work_sum: 0,
                  study_sum: 0,
                  task_sum: 0
                };
                commit("addTime", times);
              } else {
                commit("addTime", doc.data());
              }
            } catch (error) {
              console.log("DB is empty.");
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
