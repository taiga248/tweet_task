<template>
  <v-container>
    <v-layout wrap row>
      <v-flex xs12 sm4>
        <v-card class="card ma-4 text-center">
          <v-responsive class="pt-4">
            <v-avatar size="150">
              <v-img :src="photoURL" alt="avatar" />
            </v-avatar>
          </v-responsive>
          <v-card-text>
            <p class="title">{{ userName }}</p>
            <v-list class="text-left">
              <v-list-item class="grey--text">
                <v-icon left>mdi-pencil</v-icon>
                <span>目標 : 〇〇</span>
              </v-list-item>
              <v-list-item class="grey--text">
                <v-icon left>mdi-calendar</v-icon>
                <span>いつまで : 〇〇</span>
              </v-list-item>
              <v-list-item>
                <v-icon left>mdi-timer</v-icon>
                <span>総勉強時間</span>
              </v-list-item>
              <v-list-item>
                <div class="mx-auto" v-for="(time, i) in times" :key="i">
                  <v-chip class="mr-1" dark label>
                    <v-icon left>mdi-label</v-icon>
                    <span>{{ time }}</span>
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
        // {
        //   text: "総合",
        //   color: "grey"
        // },
        // {
        //   text: "仕事",
        //   color: "primary"
        // },
        // {
        //   text: "勉強",
        //   color: "success"
        // },
        // {
        //   text: "課題",
        //   color: "rgb(255, 69, 58)"
        // }
        "red",
        "primary",
        "success",
        "rgb(255, 69, 58)"
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
