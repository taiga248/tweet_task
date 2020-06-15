<template>
  <div class="mx-5">
    <h3 class="text-center my-5">Analytics</h3>
    <v-card class="mx-auto py-5">
      <v-sheet class="mx-auto my-5 py-12" color="cyan" elevation="6" max-width="calc(100% - 32px)">
        <v-sparkline
          :labels="label"
          :value="value"
          color="white"
          line-width="2"
          padding="8"
          smooth="5"
        ></v-sparkline>
      </v-sheet>

      <v-card-text>
        <div class="title font-weight-light mb-2 ml-2">{{ userName }}</div>
        <v-divider class="my-4"></v-divider>
        <v-list-item>
          <v-icon class="mr-2" left>mdi-clock</v-icon>
          <span class="grey--text font-weight-light">1 week</span>
        </v-list-item>
        <v-list-item>
          合計時間 :
          <!-- <span class="font-weight-medium">{{ totalTime }}</span> -->
          <span class="font-weight-medium">totalTime</span>
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
        <v-btn text color="primary" class="mr-5">
          <v-icon>mdi-twitter</v-icon>
          <span>ツイートする</span>
        </v-btn>
      </v-card-actions>
      <!-- debug -->
      <v-btn @click="log">Total time : debug btn</v-btn>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  created() {
    // this.totalTime = this.$store.state.totalTime;
  },
  data() {
    return {
      // totalTime: {},
      label: ["月", "火", "水", "木", "金", "土", "日"],
      /* firestoreから引っ張ってくる */
      value: [1, 4, 15, 1, 6, 9, 1]
    };
  },
  methods: {
    log() {
      console.log("Analytics : ");
      // console.log(this.totalTime);
    }
    /* 7で割ってそれぞれに入れる */
    // addValue() {}
  },
  computed: {
    ...mapGetters(["userName"])
  }
};
</script>