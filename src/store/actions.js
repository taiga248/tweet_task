import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const login = () => {
  const google_auth_provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithRedirect(google_auth_provider);
};
const logout = () => {
  firebase.auth().signOut();
};
const setLoginUser = ({ commit }, user) => {
  commit("setLoginUser", user);
};
const deleteLoginUser = ({ commit }) => {
  commit("deleteLoginUser");
};
const toggleSideMenu = ({ commit }) => {
  commit("toggleSideMenu");
};
const setProfile = ({ getters, commit }, profile) => {
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
};
const fetchProfile = ({ getters, commit }) => {
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
};
const addWork = ({ getters, commit }, work) => {
  if (getters.uid) {
    firebase
      .firestore()
      .collection(`users/${getters.uid}/work`)
      .add(work)
      .then(doc => {
        commit("addWork", { id: doc.id, work });
      });
  }
};
const fetchWork = ({ getters, commit }) => {
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
};
const addTime = ({ getters, commit }, times) => {
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
        } else {
          const existingTotalTime = doc.data().sum;
          const existingWorkTime = doc.data().work_sum;
          const existingTaskTime = doc.data().task_sum;
          const existingStudyTime = doc.data().study_sum;
          times = {
            sum: existingTotalTime + times.sum,
            work_sum: existingWorkTime + times.work_sum,
            task_sum: existingTaskTime + times.task_sum,
            study_sum: existingStudyTime + times.study_sum
          };
          // 一時的に総和を0にしている 要リファクタ
          commit("clearTotalTime");
          firebase
            .firestore()
            .collection(`users/${getters.uid}/totalTime`)
            .doc("time")
            .set(times);
        }
      });
  }
};
const fetchTime = ({ getters, commit }) => {
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
              task_sum: 0,
              study_sum: 0
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
};

export default {
  login,
  logout,
  setLoginUser,
  deleteLoginUser,
  toggleSideMenu,
  setProfile,
  fetchProfile,
  addWork,
  fetchWork,
  addTime,
  fetchTime
};
