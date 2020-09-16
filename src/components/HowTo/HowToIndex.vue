<template>
  <v-container>
    <v-list>
      <v-list-item v-for="(title, i) in titles" :key="i">
        <v-list-item-content>
          <v-list-item-title class="title">{{ title.title }}</v-list-item-title>
          <p>{{ title.content }}</p>
        </v-list-item-content>
      </v-list-item>
    </v-list>
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
