<template>
  <v-container>
    <v-card class="pa-3" :elevation="hover6">
      <h2>目次</h2>
      <v-list>
        <v-list-item v-for="(title, i) in titles" :key="i">
          <v-list-item-title>
            <v-btn text>{{ title.title }}</v-btn>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: {
    titles: {
      type: Object
    }
  }
};
</script>
