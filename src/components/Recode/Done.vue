<template>
  <div>
    <h3 class="text-center mb-5">Done card</h3>
    <v-card class="pa-3 ma-2" v-for="(work, i) in works" :key="i">
      <v-layout>
        <v-flex>
          <div class="ml-5">
            <p>
              <v-icon left>mdi-label</v-icon>
              <span>{{work.tag}}</span>
            </p>
            <p>
              <v-icon left>mdi-timer</v-icon>
              <span>{{ work.time }} 時間</span>
            </p>
            <p>
              <v-icon left>mdi-text</v-icon>
              <span>{{ work.text }}</span>
            </p>
          </div>
        </v-flex>
      </v-layout>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      works: []
    };
  },
  created() {
    this.works = this.$store.state.works;
    console.log("Done create :");
    console.log(this.works);
  },
  methods: {}
};
</script>
