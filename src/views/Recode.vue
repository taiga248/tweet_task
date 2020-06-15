<template>
  <v-container>
    <v-layout row wrap>
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
  name: "Recode",
  components: {
    Analytics,
    Done
  }
};
</script>
