<template>
  <v-container>
    <v-card class="pt-3 px-4">
      <h2>目次</h2>
      <v-list class="my-0 py-0">
        <v-list-item v-for="(title, i) in titles" :key="i">
          <v-list-item-title>{{ title.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array
    }
  }
};
</script>
