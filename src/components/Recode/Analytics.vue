<template>
  <div class="mx-5">
    <h3 class="text-center my-5">Analytics</h3>
    <v-card class="mx-auto py-5">
      <section class="chart">
        <Chart class="chart__bar" :def="def_bar" :data="chart_data" />
      </section>

      <v-card-text>
        <div class="title font-weight-light mb-2 ml-2">{{ userName }}</div>
        <v-divider class="my-4"></v-divider>
        <v-list-item>
          <v-icon class="mr-2" left>mdi-clock</v-icon>
          <span class="grey--text font-weight-light">ほにゃらら</span>
        </v-list-item>
        <v-list-item>
          合計時間 :
          <!-- <span class="font-weight-medium">{{ this.$store.state.totalTime }}</span> -->
          <span class="font-weight-medium">{{ totalTime }}</span>
          時間
        </v-list-item>
        <v-list-item>
          平均時間 :
          <span class="font-weight-medium">this_week_average</span>
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
    <v-btn @click="log">btn</v-btn>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Chart from "vue-chartless";

export default {
  components: {
    Chart
  },
  created() {
    this.works = this.$store.state.works;
    this.totalTime = this.$store.state.totalTime;
    console.log("Analytics totalTime : " + this.totalTime);
  },
  // mounted() {
  //   this.$nextTick(() => {
  //     this.fetchTime().then(() => {
  //       this.totalTime = this.$store.state.totalTime;
  //       console.log("Analytics totalTime : " + this.totalTime);
  //     });
  //   });
  // },
  data() {
    return {
      works: [],
      totalTime: 0,
      def_bar: {
        type: "bar"
      },
      chart_data: [
        { label: "仕事", value: 3 },
        { label: "勉強", value: 2 },
        { label: "課題", value: 13 }
      ],
      ref: "https://twitter.com/share?ref_src=twsrc%5Etfw"
    };
  },

  methods: {
    log() {
      console.log(this.totalTime);
    },
    ...mapActions(["fetchTime"])
  },
  computed: {
    tweetRef() {
      return (
        this.ref +
        "&text=今週は、平均 " +
        this.totalTime +
        " 時間作業しました！%0a"
      );
    },
    ...mapGetters(["userName"])
  }
};
</script>

<style scoped>
* {
  /* outline: blue solid 1px; */
}
.chart {
  padding: 16px;
  /* background: #bbb; */
}
.chart__bar {
  border-radius: 15px;
  padding: 16px 0;
  /* background: #efefef; */
}
</style>
