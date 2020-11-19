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
        case this.tags[0].name: // 仕事 青
          return this.tags[0].color;
        case this.tags[1].name: // 課題 緑
          return this.tags[1].color;
        case this.tags[2].name: // 勉強 赤
          return this.tags[2].color;
        default:
          return;
      }
    }
  }
};
</script>
