<template>
  <v-layout wrap row>
    <v-flex xs12 sm6>
      <v-img lazy-src contain max-height="400" :src="hero_img"></v-img>
    </v-flex>
    <v-flex xs12 sm6>
      <div class="text-center">
        <h1 class="title">あなたの学びを記録しよう</h1>
        <v-btn @click="login" color="primary ">
          <v-icon>mdi-in</v-icon>
          <span>記録する</span>
        </v-btn>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      hero_img: require("@/assets/hero_img.svg")
    };
  },
  methods: {
    ...mapActions(["login"])
  }
};
</script>

<style></style>
