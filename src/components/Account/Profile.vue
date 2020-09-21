<template>
  <v-card class="my-1 text-center">
    <v-responsive class="pt-4">
      <v-avatar size="150">
        <v-img :src="photoURL" alt="avatar" />
      </v-avatar>
    </v-responsive>
    <v-card-text class="my-0 py-0">
      <p class="title">{{ userName }}</p>
      <v-list clasAddTaskForms="text-left">
        <v-list-item class="grey--text mx-2">
          <v-icon left>mdi-pencil</v-icon>
          <span class="grey--text">{{ this.$store.state.profile.target }}</span>
        </v-list-item>
        <v-list-item class="grey--text mx-2">
          <v-icon left>mdi-calendar</v-icon>
          <span class="grey--text">{{ this.$store.state.profile.limit }}</span>
        </v-list-item>
        <v-list-item>
          <v-spacer></v-spacer>
          <v-card-actions class="my-0 py-0">
            <v-flex class="my-auto">
              <div class="text-center">
                <v-dialog v-model="formDrawer" width="500">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn text v-bind="attrs" v-on="on">
                      <v-icon left>mdi-account-settings</v-icon>Edit
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-title primary-title>Edit profile</v-card-title>
                    <v-card-text>
                      <v-form class="px-3">
                        <v-text-field
                          label="目標"
                          v-model="profile.target"
                          prepend-icon="mdi-pencil"
                        ></v-text-field>
                        <v-text-field
                          label="いつまで"
                          v-model="profile.limit"
                          prepend-icon="mdi-calendar"
                        ></v-text-field>
                      </v-form>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="primary"
                        :disabled="!profile.target || !profile.limit"
                        text
                        @click="submit"
                        >変更する</v-btn
                      >
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </div>
            </v-flex>
          </v-card-actions>
        </v-list-item>
        <v-divider class="mx-auto" width="50%"></v-divider>
        <v-list-item>
          <v-icon left>mdi-timer</v-icon>
          <span>総作業時間 : {{ this.$store.state.totalTime }}時間</span>
        </v-list-item>
        <v-list-item>
          <div class="mx-auto">
            <v-chip
              class="mr-1 px-1"
              dark
              :color="tag.color"
              label
              v-for="(tag, i) in tags"
              :key="i"
            >
              <span class="mx-4">{{ tag.text }}</span>
            </v-chip>
          </div>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      formDrawer: false,
      profile: {
        target: "",
        limit: ""
      },
      tags: [
        {
          text: "仕事",
          color: "rgba(54, 162, 235, 1)" // 青
        },
        {
          text: "勉強",
          color: "rgba(48, 209, 88, 1)" // 緑
        },
        {
          text: "課題",
          color: "rgba(255, 99, 132, 1)" // 赤
        }
      ]
    };
  },
  methods: {
    submit() {
      this.formDrawer = !this.formDrawer;
      if (this.profile.target === "" || this.profile.limit === "") {
        return alert("入力漏れがあります");
      }
      this.setProfile(this.profile);
      this.form_init();
    },
    form_init() {
      this.profile = {
        target: "",
        limit: ""
      };
    },
    ...mapActions(["setProfile"])
  },
  computed: {
    ...mapGetters(["userName", "photoURL"])
  }
};
</script>
