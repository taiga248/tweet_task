<template>
  <v-container>
    <v-layout wrap row class="mx-4 mb-10">
      <v-flex xs12 sm4 class="mx-auto">
        <Profile />
      </v-flex>
      <v-flex xs12 sm6 class="mx-auto">
        <AddTaskForm />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import AddTaskForm from "@/components/Account/AddTaskForm";
import Profile from "@/components/Account/Profile";

export default {
  components: {
    AddTaskForm,
    Profile
  }
};
</script>
