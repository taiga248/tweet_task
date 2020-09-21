<template>
  <v-container>
    <v-layout wrap row class="mx-4 mb-10">
      <v-flex xs12 sm4 md3 class="mx-auto">
        <AllUser />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import AllUser from "@/components/Allworks/AllUser";
export default {
  components: {
    AllUser
  }
};
</script>
