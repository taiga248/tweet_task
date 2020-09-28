<template>
  <section>
    <h2 v-if="works.length === 0" class="text-center grey--text mt-15">
      <br />ここに記録が追加されます
    </h2>
    <v-card class="px-1 my-1" v-for="(work, i) in works" :key="i">
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
  </section>
</template>

<script>
export default {
  data() {
    return {
      works: [],
      tags: this.$store.state.tags
    };
  },
  created() {
    this.works = this.$store.state.works;
  },
  methods: {
    tag_color(tag) {
      switch (tag) {
        case "仕事":
          return "rgba(54, 162, 235, 1)";
        case "課題":
          return "rgba(48, 209, 88, 1)";
        case "勉強":
          return "rgba(255, 99, 132, 1)";
        default:
          return;
      }
    }
  }
};
</script>
