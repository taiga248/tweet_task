<template>
  <v-container>
    <h2>How to use ？</h2>
    <v-layout wrap>
      <v-flex xs12 md3 class="mx-auto" v-for="(img, i) in imgs" :key="i">
        <h3 class="subtitle-1 pl-5">
          <span class="title">0{{ i + 1 }}.</span>
          {{ img.text }}
        </h3>
        <v-img class="my-5 mx-auto" :src="img.path" width="220"></v-img>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      imgs: [
        {
          text: "AAA",
          path: require("@/assets/home/Home-min.png")
        },
        {
          text: "BBB",
          path: require("@/assets/home/Home-min.png")
        },
        {
          text: "CCC",
          path: require("@/assets/home/Home-min.png")
        },
        {
          text: "DDD",
          path: require("@/assets/home/Home-min.png")
        }
      ]
    };
  }
};
</script>
