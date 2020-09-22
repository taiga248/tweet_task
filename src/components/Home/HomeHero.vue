<template>
  <v-layout wrap row>
    <v-flex xs12 sm6>
      <v-img lazy-src contain max-height="400" :src="hero_img"></v-img>
    </v-flex>
    <v-flex xs12 sm4 class="align-self-center mx-auto">
      <v-card class="py-2 mx-auto" max-width="80%" min-width>
        <div class="text-center">
          <h1 class="title">あなたの時間を記録しよう</h1>
          <v-btn @click="login" class="my-2" color="primary">
            <span>記録する</span>
          </v-btn>
        </div>
      </v-card>
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