<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-nav-icon v-if="$store.state.login_user" @click="toggleSideMenu"></v-app-bar-nav-icon>
      <v-toolbar-title>Knowder</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text v-if="!$store.state.login_user">
          <v-icon>mdi-exit-to-app</v-icon>
          <span @click="logout">Logout</span>
        </v-btn>
      </v-toolbar-items>
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
import firebase from "firebase";

export default {
  name: "App",
  components: {
    SideNav
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setLoginUser(user);
        this.fetchWork()
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
      "logout",
      "setLoginUser",
      "deleteLoginUser",
      "fetchWork"
    ])
  }
};
</script>
