<template>
  <v-container>
    <v-layout wrap row>
      <v-flex xs12>
        <h1>Home page</h1>
        <v-btn @click="login" color="primary">
          <v-icon>mdi-in</v-icon>
          <span>Login</span>
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";

export default {
  components: {},
  methods: {
    ...mapActions(["login"])
  },
  computed: {}
};
</script>
