<template>
  <v-container>
    <v-layout wrap row>
      <v-flex xs12 sm5>
        <v-card class="card ma-4 text-center" height="600">
          <v-responsive class="pt-7">
            <v-avatar size="150">
              <v-img :src="photoURL" alt="avatar" />
            </v-avatar>
          </v-responsive>
          <v-card-text>
            <p class="title">userName</p>
            <div class="text-left ml-6">
              <p class="grey--text">
                <v-icon left>mdi-pencil</v-icon>
                <span>目標</span>
              </p>
              <p class="grey--text">
                <v-icon left>mdi-calendar</v-icon>
                <span>いつまで</span>
              </p>
              <p class="grey--text">
                <v-icon left>mdi-tag</v-icon>
                <span>進行中のもの</span>
              </p>
            </div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text color="grey--text" class="mr-6">
              <v-icon left>mdi-account-settings</v-icon>
              <span>Edit</span>
            </v-btn>
          </v-card-actions>
          <v-divider class="mx-auto my-3" width="50%"></v-divider>
          <v-card-text>
            <div class="text-left ml-6">
              <p class="grey--text">
                <v-icon left>mdi-timer</v-icon>
                <span>総勉強時間</span>
              </p>
            </div>
            <div class="mx-auto">
              <v-chip class="mx-1" :color="tag.color" label v-for="(tag, i) in tags" :key="i">
                <v-icon left>mdi-label</v-icon>
                <span>{{ tag.text }}</span>
              </v-chip>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm7>
        <AddTaskForm />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// import { mapGetters } from "vuex";
import AddTaskForm from "@/components/Account/AddTaskForm";

export default {
  components: {
    AddTaskForm
  },
  data() {
    return {
      tags: [
        {
          text: "仕事",
          color: "primary"
        },
        {
          text: "勉強",
          color: "success"
        },
        {
          text: "課題",
          color: "info"
        }
      ],
      photoURL:
        "https://images.pexels.com/photos/3704460/pexels-photo-3704460.jpeg?cs=srgb&dl=pexels-3704460.jpg&fm=jpg"
    };
  },
  computed: {
    // ...mapGetters(["userName", "photoURL"])
  }
};
</script>
