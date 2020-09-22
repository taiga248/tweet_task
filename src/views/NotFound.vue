<template>
  <v-container>
    <v-card class="mx-auto my-10 pa-10 text-center" width="500">
      <p class="display-2">404 Not Found</p>
      <v-card-text class="title">
        ブラウザバックしてください。
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" class="mx-auto mt-5" :to="{ name: 'Home' }">
          <v-icon left>mdi-home</v-icon>
          <span>ホームに戻る</span>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {};
</script>
