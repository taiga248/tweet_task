<template>
  <div class="mx-5">
    <h3 class="text-center mt-1 mb-3">Done card</h3>
    <p v-if="works.length === 0" class="text-center grey--text mt-12 display-1">
      <br />作業を記録しよう！！
    </p>
    <v-card class="px-1 my-2" v-for="(work, i) in works" :key="i">
      <v-layout wrap class="pa-3">
        <v-flex xs6 class="my-2">
          <v-icon left :color="tag_color(work.tag)">mdi-label</v-icon>
          <span>{{ work.tag }}</span>
        </v-flex>
        <v-flex xs6 class="my-2">
          <v-icon left>mdi-timer</v-icon>
          <span>{{ work.time }} 時間</span>
        </v-flex>
        <v-flex xs12 class="my-2">
          <v-icon left>mdi-text</v-icon>
          <span>{{ work.text }}</span>
        </v-flex>
      </v-layout>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      works: []
    };
  },
  created() {
    this.works = this.$store.state.works;
  },
  methods: {
    tag_color(tag) {
      switch (tag) {
        case "仕事":
          return "primary";
        case "勉強":
          return "success";
        case "課題":
          return "rgb(255, 69, 58)";
        default:
          return;
      }
    }
  }
};
</script>
