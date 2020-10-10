<template>
  <v-navigation-drawer
    app
    class="white--text"
    v-model="$store.state.drawer"
    temporary
  >
    <v-list shaped>
      <v-list-item-group color="primary">
        <v-list-item>
          <v-list-item-avatar>
            <img v-if="photoURL" :src="photoURL" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ userName }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <div v-for="(item, i) in items" :key="i">
          <v-list-item v-if="i !== 2" :to="item.link">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>
      </v-list-item-group>
    </v-list>

    <v-bottom-navigation absolute horizontal height="100">
      <v-btn text class="mt-1" v-if="$store.state.login_user">
        <v-icon>mdi-exit-to-app</v-icon>
        <span @click="logout">ログアウト</span>
      </v-btn>
    </v-bottom-navigation>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "SideNav",
  data() {
    return {
      items: this.$store.state.pageItem
    };
  },
  methods: {
    ...mapActions(["logout"])
  },
  computed: {
    ...mapGetters(["userName", "photoURL"])
  }
};
</script>
