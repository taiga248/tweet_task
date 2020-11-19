<template>
  <v-container>
    <v-layout wrap row class="mx-4 mb-10">
      <v-flex xs12 sm4 md3 class="mx-auto">
        <AllUsersProfile />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import AllUsersProfile from "@/components/AllUsers/AllUsersProfile";
export default {
  components: {
    AllUsersProfile
  }
};
</script>
