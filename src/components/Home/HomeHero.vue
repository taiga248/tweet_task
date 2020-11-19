<template>
  <v-container>
    <v-layout wrap>
      <v-flex xs12 sm12 md5>
        <v-img lazy-src contain max-height="400" :src="hero_img"></v-img>
      </v-flex>
      <v-flex xs12 sm6 md7 class="align-self-center mx-auto">
        <v-flex xs12 md7 class="mx-auto">
          <h2 class="title">Knowder</h2>
          <p>
            あなたの作業記録をサポートします。
            <br />あなた以外のユーザーの作業時間なども見れるので、
            モチベーションをも助けます。
          </p>
        </v-flex>
        <v-flex xs12 md5 class="mx-auto">
          <CTA />
        </v-flex>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import CTA from "@/components/Home/HomeCTA";

export default {
  components: {
    CTA
  },
  data() {
    return {
      hero_img: require("@/assets/home/hero_img.svg")
    };
  }
};
</script>
