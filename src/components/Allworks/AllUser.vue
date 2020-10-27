<template>
  <div>
    <!-- <v-card>
      <v-card-text>
        <v-list class="text-left my-0 py-0">
          <v-list-item class="grey--text">
            <v-icon left>mdi-pencil</v-icon>
            <span class="grey--text">
              {{
              this.$store.state.profile.target
              }}
            </span>
          </v-list-item>
          <v-list-item class="grey--text">
            <v-icon left>mdi-calendar</v-icon>
            <span class="grey--text">
              {{
              this.$store.state.profile.limit
              }}
            </span>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>-->
    <v-card class="my-1 text-center" v-for="(uid, i) in uids" :key="i">
      <v-responsive class="pt-2">
        <v-avatar size="100">
          <v-img :src="photoURL" alt="avatar" />
        </v-avatar>
      </v-responsive>
      <v-card-title v-text="uid"></v-card-title>
      <v-card-title>
        <div class="mx-auto">userName</div>
      </v-card-title>
      <v-card-text>
        <v-list>
          <v-list-item>
            <v-icon left>mdi-timer</v-icon>
            <span>総作業時間 : {{ allUsers[i].sum }}時間</span>
          </v-list-item>
          <v-list-item>
            <div class="mx-auto">
              <v-chip class="mr-1" :color="tags[0].color" dark label>
                <v-icon left>mdi-label</v-icon>
                <span>{{ allUsers[i].work_sum }}h</span>
              </v-chip>
              <v-chip class="mr-1" :color="tags[1].color" dark label>
                <v-icon left>mdi-label</v-icon>
                <span>{{ allUsers[i].task_sum }}h</span>
              </v-chip>
              <v-chip :color="tags[2].color" dark label>
                <v-icon left>mdi-label</v-icon>
                <span>{{ allUsers[i].study_sum }}h</span>
              </v-chip>
            </div>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      tags: this.$store.state.tags,
      uids: this.$store.state.uidData,
      allUsers: this.$store.state.allUsers
    };
  },
  created() {
    this.fetchAllUsers(this.$store.state.uidData);
  },
  computed: {
    ...mapGetters(["userName", "photoURL"])
  },
  methods: {
    ...mapActions(["fetchAllUsers"])
  }
};
</script>
