<template>
  <v-container>
    <v-layout row wrap class="mx-auto">
      <v-flex xs12 md3>
        <HowToMenu />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import HowToMenu from "@/components/HowTo/HowToMenu";
export default {
  components: {
    HowToMenu
  }
};
</script>
