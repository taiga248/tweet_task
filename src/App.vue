<template>
  <v-app>
    <Loading v-show="loading" :loading="loading"></Loading>
    <section v-show="!loading">
      <v-app-bar app dense color="white">
        <v-app-bar-nav-icon
          v-if="this.$store.state.login_user"
          @click="toggleSideMenu"
        ></v-app-bar-nav-icon>
        <v-toolbar-title>{{ refActivePath() }}</v-toolbar-title>
      </v-app-bar>
      <SideNav />
      <BtmNav v-show="$vuetify.breakpoint.xs && $store.state.login_user" />

      <v-content>
        <v-container fluid fill-height align-start>
          <router-view />
        </v-container>
      </v-content>
    </section>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
import SideNav from "@/components/SideNav";
import Loading from "@/components/Loading";
import BtmNav from "@/components/BtmNav";
import firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "App",
  components: {
    SideNav,
    BtmNav,
    Loading
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
  data() {
    return {
      loading: true,
      activePath: [
        "Knowder",
        "アカウント",
        "記録",
        "みんなの記録",
        "使い方",
        "Not Found"
      ]
    };
  },
  methods: {
    refActivePath() {
      switch (this.$route.path) {
        case "/":
          return this.activePath[0];
        case "/Account":
          return this.activePath[1];
        case "/Recode":
          return this.activePath[2];
        case "/Allworks":
          return this.activePath[3];
        case "/Howto":
          return this.activePath[4];
        default:
          return this.activePath[5];
      }
    },
    ...mapActions([
      "toggleSideMenu",
      "setLoginUser",
      "deleteLoginUser",
      "fetchWork",
      "fetchProfile",
      "fetchTime"
    ])
  },
  beforeUpdate() {
    this.loading = false;
  }
};
</script>

<style scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>
