<template>
  <v-container>
    <v-layout wrap row class="mx-4">
      <v-flex xs12 sm4 class="mx-auto">
        <AccountProfile class="mt-11" />
      </v-flex>
      <!-- <v-flex v-if="!$vuetify.breakpoint.xs" xs12 sm6 class="mx-auto">
        <AccountForm />
        </v-flex>-->
    </v-layout>
  </v-container>
</template>

<script>
// import AccountForm from "@/components/Account/AccountForm";
import AccountProfile from "@/components/Account/AccountProfile";

export default {
  components: {
    // AccountForm,
    AccountProfile
  }
};
</script>

<style>
* {
  /* outline: solid 1px red; */
}
</style>
