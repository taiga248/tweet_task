<template>
  <v-container>
    <v-layout wrap row class="mx-4 mb-10">
      <v-flex xs12 sm6>
        <Analytics />
      </v-flex>
      <v-flex xs12 sm6>
        <Done />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Analytics from "@/components/Recode/Analytics";
import Done from "@/components/Recode/Done";

export default {
  components: {
    Analytics,
    Done
  }
};
</script>
