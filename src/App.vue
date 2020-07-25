<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-nav-icon
        v-if="$store.state.login_user"
        @click="toggleSideMenu"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>Knowder</v-toolbar-title>
    </v-app-bar>

    <SideNav />

    <v-content>
      <v-container fluid fill-height align-start>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
import SideNav from "./components/SideNav";
import firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "App",
  components: {
    SideNav
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setLoginUser(user);
        this.fetchWork();
        this.fetchProfile();
        this.fetchTime();
        if (this.$router.currentRoute.name === "Home") {
          this.$router.push({ name: "Account" }, () => {});
        }
      } else {
        this.deleteLoginUser();
        this.$router.push({ name: "Home" }, () => {});
      }
    });
  },

  methods: {
    ...mapActions([
      "toggleSideMenu",
      "setLoginUser",
      "deleteLoginUser",
      "fetchWork",
      "fetchProfile",
      "fetchTime"
    ])
  }
};
</script>
