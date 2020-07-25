<template>
  <div class="mx-5">
    <h3 class="text-center my-5">Analytics</h3>
    <v-card class="mx-auto py-5">
      <section class="chart">
        <Chart class="chart__bar" :def="def_bar" :data="handleData" />
      </section>

      <v-card-text>
        <div class="title font-weight-light mb-2 ml-2">{{ userName }}</div>
        <v-divider class="my-4"></v-divider>
        <v-list-item>
          <v-icon class="mr-2" left>mdi-clock</v-icon>
          <span class="grey--text font-weight-light">今週の作業時間</span>
        </v-list-item>
        <v-list-item>
          合計 :
          <span class="font-weight-medium">
            {{ this.$store.state.totalTime }}
          </span>
          時間
        </v-list-item>
        <v-list-item>
          平均 :
          <span class="font-weight-medium">{{ averageTotalTime }}</span>
          時間
        </v-list-item>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          text
          color="primary"
          class="mr-5"
          :href="tweetRef"
          target="_blank"
        >
          <v-icon>mdi-twitter</v-icon>
          <span>ツイートする</span>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Chart from "vue-chartless";

export default {
  components: {
    Chart
  },
  created() {
    this.works = this.$store.state.works;
  },
  data() {
    return {
      works: [],
      def_bar: {
        type: "bar"
      },
      // Androidのみ何故かOGP出ず
      // ref: "https://twitter.com/share?ref_src=twsrc%5Etfw"
      // ref: "https://twitter.com/share?ref_src=https://tweet-task.web.app"
      ref: "https://twitter.com/share?ref_src="
    };
  },
  computed: {
    tweetRef() {
      return (
        this.ref +
        "https://tweet-task.web.app&text=今週は、合計 " +
        this.$store.state.totalTime +
        " 時間作業しました！%0a"
      );
    },
    handleData() {
      let chart_data = [
        { label: "仕事", value: this.$store.state.times.work_sum },
        { label: "勉強", value: this.$store.state.times.study_sum },
        { label: "課題", value: this.$store.state.times.task_sum }
      ];
      return chart_data;
    },
    averageTotalTime() {
      let average = this.$store.state.totalTime;
      const point = 1;
      average =
        Math.floor((average / 7) * Math.pow(10, point)) / Math.pow(10, point);
      return average;
    },
    ...mapGetters(["userName"])
  }
};
</script>
