import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

function dbRef(name) {
  return firebase.firestore().collection(name);
}

const login = () => {
  const google_auth_provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithRedirect(google_auth_provider);
};
const logout = () => {
  firebase.auth().signOut();
};
const setLoginUser = ({ getters, commit }, user) => {
  commit("setLoginUser", user);
  if (getters.uid) {
    const usersDB = dbRef("allUsers");
    const allUsersDB = dbRef("users");
    const uidDB = dbRef("uidDB");
    const userData = { userName: getters.userName, photoURL: getters.photoURL };

    const ids = [getters.uid];
    usersDB.doc(getters.uid).set(userData);
    allUsersDB.doc(getters.uid).set(userData);

    // 全ユーザー観覧用に一時保存
    uidDB.doc("uids").update({
      id: firebase.firestore.FieldValue.arrayUnion(...ids)
    });
  }
};
const deleteLoginUser = ({ commit }) => {
  commit("deleteLoginUser");
};
const toggleSideMenu = ({ commit }) => {
  commit("toggleSideMenu");
};
const setProfile = ({ getters, commit }, profile) => {
  if (getters.uid) {
    const profDB = dbRef(`users/${getters.uid}/profile`);
    profDB
      .doc("text")
      .set(profile)
      .then(() => {
        commit("setProfile", profile);
      });
  }
};
const fetchProfile = ({ getters, commit }) => {
  if (getters.uid) {
    const profDB = dbRef(`users/${getters.uid}/profile`);
    profDB.doc("text").onSnapshot(doc => {
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
    const workDB = dbRef(`users/${getters.uid}/work`);
    workDB.add(work).then(doc => {
      commit("addWork", { id: doc.id, work });
    });
  }
};
const fetchWork = ({ getters, commit }) => {
  if (getters.uid) {
    const workDB = dbRef(`users/${getters.uid}/work`);
    workDB.get().then(snapshot => {
      snapshot.forEach(doc =>
        commit("addWork", { id: doc.id, work: doc.data() })
      );
    });
  }
};
const addTime = ({ getters, commit }, times) => {
  if (getters.uid) {
    const timeDB = dbRef(`users/${getters.uid}/totalTime`);
    const allUserTimeDB = dbRef(`allUsers/${getters.uid}/totalTime`);
    timeDB
      .doc("time")
      .get()
      .then(doc => {
        if (doc.data() === undefined) {
          // 初回アクセス時、コレクションがない時の挙動
          timeDB.doc("time").set(times);
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
          timeDB.doc("time").set(times);
          // 全員の記録観覧用
          allUserTimeDB.doc("time").set(times);
        }
      });
  }
};
const fetchTime = ({ getters, commit }) => {
  if (getters.uid) {
    const timeDB = dbRef(`users/${getters.uid}/totalTime`);
    timeDB.doc("time").onSnapshot(doc => {
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
const fetchUids = ({ commit }) => {
  const uidDB = dbRef("uidDB");
  uidDB
    .doc("uids")
    .get()
    .then(doc => commit("fetchUids", doc.data().id));
};
const fetchAllUsers = ({ commit }, uids) => {
  for (let i = 0; i < uids.length; i++) {
    let uid = uids[i];
    dbRef(`allUsers/${uid}/totalTime`)
      .doc("time")
      .get()
      .then(doc => {
        commit("fetchAllUsers", doc.data());
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
  fetchTime,
  fetchUids,
  fetchAllUsers
};
