<template>
  <v-card class="py-2 mx-auto mb-6" max-width="300">
    <div class="text-center">
      <h1 class="title">あなたの時間を記録しよう</h1>
      <v-btn @click="login" class="my-2" color="primary">
        <span>記録する</span>
      </v-btn>
    </div>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["login"])
  }
};
</script>
