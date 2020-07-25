<template>
  <v-container>
    <v-layout wrap row>
      <v-flex xs12 sm5>
        <v-card class="card ma-4 text-center" height="500">
          <v-responsive class="pt-4">
            <v-avatar size="150">
              <v-img :src="photoURL" alt="avatar" />
            </v-avatar>
          </v-responsive>
          <v-card-text class="py-2">
            <p class="title">{{ userName }}</p>
            <v-list class="text-left">
              <v-list-item class="grey--text">
                <v-icon left>mdi-pencil</v-icon>
<<<<<<< Updated upstream
                <span>目標</span>
=======
                <span class="grey--text">
                  {{
                  this.$store.state.profile.target
                  }}
                </span>
>>>>>>> Stashed changes
              </v-list-item>
              <v-list-item class="grey--text">
                <v-icon left>mdi-calendar</v-icon>
<<<<<<< Updated upstream
                <span>いつまで</span>
=======
                <span class="grey--text">
                  {{
                  this.$store.state.profile.limit
                  }}
                </span>
>>>>>>> Stashed changes
              </v-list-item>
              <v-list-item>
                <v-spacer></v-spacer>
                <v-card-actions>
<<<<<<< Updated upstream
                  <v-btn text>
                    <v-icon left>mdi-account-settings</v-icon>
                    <span>Edit</span>
                  </v-btn>
=======
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
                            >変更する</v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </div>
                  </v-flex>
>>>>>>> Stashed changes
                </v-card-actions>
              </v-list-item>
              <v-divider class="mx-auto" width="50%"></v-divider>
              <v-list-item>
                <v-icon left>mdi-timer</v-icon>
                <span>総勉強時間 : {{ this.$store.state.totalTime }}時間</span>
              </v-list-item>
              <v-list-item>
                <div class="mx-auto">
                  <v-chip
                    class="mx-1"
                    dark
                    :color="tag.color"
                    label
                    v-for="(tag, i) in tags"
                    :key="i"
                  >
                    <v-icon left>mdi-label</v-icon>
                    <span>{{ tag.text }}</span>
                  </v-chip>
                </div>
              </v-list-item>
            </v-list>
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
import { mapGetters } from "vuex";
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
          color: "rgb(255, 69, 58)"
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["userName", "photoURL"])
  }
};
</script>

<style scoped>
* {
  /* outline: solid 1px red; */
}
</style>
