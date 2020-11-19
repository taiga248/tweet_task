<template>
  <v-container>
    <v-layout wrap row class="mx-4 mb-10">
      <v-flex xs12 sm5 class="mx-auto">
        <RecodeAnalytics />
      </v-flex>
      <v-flex xs12 sm5 class="mx-auto">
        <RecodeDone />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import RecodeAnalytics from "@/components/Recode/RecodeAnalytics";
import RecodeDone from "@/components/Recode/RecodeDone";

export default {
  components: {
    RecodeAnalytics,
    RecodeDone
  }
};
</script>
