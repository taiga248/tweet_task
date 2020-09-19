<template>
  <v-app>
    <v-app-bar app color="white">
      <v-app-bar-nav-icon
        v-if="$store.state.login_user"
        @click="toggleSideMenu"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>Knowder</v-toolbar-title>
    </v-app-bar>

    <SideNav />
    <BtmNav v-show="$vuetify.breakpoint.xs" />

    <v-content>
      <v-container fluid fill-height align-start>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
import SideNav from "@/components/SideNav";
import BtmNav from "@/components/BtmNav";
import firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "App",
  components: {
    SideNav,
    BtmNav
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setLoginUser(user);
        this.fetchLoginUsers();
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
  data() {
    return {
      appIcon: require("@/assets/appIcon.png")
    };
  },
  methods: {
    ...mapActions([
      "toggleSideMenu",
      "setLoginUser",
      "fetchLoginUsers",
      "deleteLoginUser",
      "fetchWork",
      "fetchProfile",
      "fetchTime"
    ])
  }
};
</script>
