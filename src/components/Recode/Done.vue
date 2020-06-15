<template>
  <div class="mx-5">
    <h3 class="text-center my-5">Done card</h3>
    <p v-if="works.length === 0" class="text-center grey--text mt-12 display-1">
      <br />作業を記録しよう！！
    </p>
    <v-card class="pa-3 ma-2" v-for="(work, i) in works" :key="i">
      <v-layout>
        <v-flex>
          <v-list>
            <v-list-item>
              <v-icon left :color="tag_color(work.tag)">mdi-label</v-icon>
              <span>{{ work.tag }}</span>
              <br />
            </v-list-item>
            <v-list-item>
              <v-icon left>mdi-timer</v-icon>
              <span>{{ work.time }} 時間</span>
              <br />
            </v-list-item>
            <v-list-item>
              <v-icon left>mdi-text</v-icon>
              <span>{{ work.text }}</span>
              <br />
            </v-list-item>
          </v-list>
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
