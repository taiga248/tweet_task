<template>
  <v-container>
    <v-layout>
      <v-flex>
        <v-btn text primary @click="login">
          <span>Login</span>
          <v-icon right>mdi-email</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  methods: {
    login() {
      console.log("login");
    }
  }
};
</script>
