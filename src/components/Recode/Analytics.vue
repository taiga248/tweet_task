<template>
  <section>
    <v-card class="py-5">
      <v-layout>
        <v-flex xs12 md10 class="mx-auto">
          <Chart class="my-1 px-3" :chartData="chartData" :options="options" />
        </v-flex>
      </v-layout>

      <v-card-text>
        <div class="title font-weight-light mb-2 ml-2">{{ userName }}</div>
        <v-divider class="my-4"></v-divider>
        <v-list-item>
          <v-icon class="mr-2" left>mdi-clock</v-icon>
          <span class="grey--text font-weight-light">作業時間</span>
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
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import Chart from "@/components/Recode/Chart";

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
      ref: "https://twitter.com/share?ref_src=",
      chartData: {
        labels: [
          this.$store.state.tags[0].name,
          this.$store.state.tags[1].name,
          this.$store.state.tags[2].name
        ],
        datasets: [
          {
            label: ["Total"],
            data: [
              this.$store.state.times.work_sum,
              this.$store.state.times.task_sum,
              this.$store.state.times.study_sum
            ],
            backgroundColor: [
              this.$store.state.tags[0].bg_color,
              this.$store.state.tags[1].bg_color,
              this.$store.state.tags[2].bg_color
            ],
            borderColor: [
              this.$store.state.tags[0].color,
              this.$store.state.tags[1].color,
              this.$store.state.tags[2].color
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                stepSize: 5
              }
            }
          ]
        }
      }
    };
  },
  computed: {
    tweetRef() {
      return (
        this.ref +
        "&text=今週は、合計 " +
        this.$store.state.totalTime +
        " 時間作業しました！%0a https://knowder.page.link/ogp"
      );
    },

    averageTotalTime() {
      let average = this.$store.state.totalTime;
      const point = 1;
      average =
        Math.floor((average / 3) * Math.pow(10, point)) / Math.pow(10, point);
      return average;
    },
    ...mapGetters(["userName"])
  },
  beforeUpdate() {
    this.fillData();
  },
  methods: {
    fillData() {
      this.chartData = {
        labels: [
          this.$store.state.tags[0].name,
          this.$store.state.tags[1].name,
          this.$store.state.tags[2].name
        ],
        datasets: [
          {
            label: ["Total"],
            data: [
              this.$store.state.times.work_sum,
              this.$store.state.times.task_sum,
              this.$store.state.times.study_sum
            ],
            backgroundColor: [
              this.$store.state.tags[0].bg_color,
              this.$store.state.tags[1].bg_color,
              this.$store.state.tags[2].bg_color
            ],
            borderColor: [
              this.$store.state.tags[0].color,
              this.$store.state.tags[1].color,
              this.$store.state.tags[2].color
            ],
            borderWidth: 1
          }
        ]
      };
    }
  }
};
</script>
