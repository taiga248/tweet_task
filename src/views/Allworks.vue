<template>
  <v-container>
    <v-layout wrap row>
      <v-flex xs12 sm6 md4>
        <v-card class="text-center">
          <v-responsive class="pt-2">
            <v-avatar size="150">
              <v-img :src="photoURL" alt="avatar" />
            </v-avatar>
          </v-responsive>
          <v-card-title>
            <div class="mx-auto">{{ userName }}</div>
          </v-card-title>
          <v-card-text>
            <v-list class="text-left">
              <v-list-item class="grey--text">
                <v-icon left>mdi-pencil</v-icon>
                <span class="grey--text">
                  {{ this.$store.state.profile.target }}
                </span>
              </v-list-item>
              <v-list-item class="grey--text">
                <v-icon left>mdi-calendar</v-icon>
                <span class="grey--text">
                  {{ this.$store.state.profile.limit }}
                </span>
              </v-list-item>
              <v-list-item>
                <v-icon left>mdi-timer</v-icon>
                <span>総作業時間 : {{ this.$store.state.totalTime }}時間</span>
              </v-list-item>
              <v-list-item>
                <div class="mx-auto">
                  <v-chip class="mr-1" :color="tags[0].color" dark label>
                    <v-icon left>mdi-label</v-icon>
                    <span>{{ times.work_sum }}h</span>
                  </v-chip>
                  <v-chip class="mr-1" :color="tags[1].color" dark label>
                    <v-icon left>mdi-label</v-icon>
                    <span>{{ times.study_sum }}h</span>
                  </v-chip>
                  <v-chip :color="tags[2].color" dark label>
                    <v-icon left>mdi-label</v-icon>
                    <span>{{ times.task_sum }}h</span>
                  </v-chip>
                </div>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      times: {},
      tags: [
        {
          text: "仕事",
          color: "rgba(54, 162, 235, 1)"
        },
        {
          text: "勉強",
          color: "rgba(48, 209, 88, 1)"
        },
        {
          text: "課題",

          color: "rgba(255, 99, 132, 1)"
        }
      ]
    };
  },
  created() {
    this.times = this.$store.state.times;
  },
  computed: {
    ...mapGetters(["userName", "photoURL"])
  }
};
</script>
