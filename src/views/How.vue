<template>
  <v-container>
    <v-layout row wrap class="mx-auto">
      <v-flex xs12 md3>
        <HowMenu />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import HowMenu from "@/components/How/HowMenu";
export default {
  components: {
    HowMenu
  }
};
</script>
