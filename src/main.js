import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import firebase from "firebase/app";
import './registerServiceWorker'


Vue.config.productionTip = false;

let firebaseConfig = {
  apiKey: "AIzaSyCbrDRzob4gw1Jk8ZidSf_YNWBB3-AbaGQ",
  authDomain: "tweet-task.firebaseapp.com",
  databaseURL: "https://tweet-task.firebaseio.com",
  projectId: "tweet-task",
  storageBucket: "tweet-task.appspot.com",
  messagingSenderId: "545490804922",
  appId: "1:545490804922:web:62907f52b191267a8b2283"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
