<template>
  <v-container>
    <v-card class="mx-auto my-10 pa-10 text-center" width="500">
      <p class="display-2">404 Not Found</p>
      <v-card-text class="title">
        Sorry... This page is nothing.
        <br />Please move to another page.
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" class="mx-auto mt-5" :to="{ name: 'Account' }">
          <v-icon left>mdi-account</v-icon>
          <span>アカウントページ</span>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {};
</script>
