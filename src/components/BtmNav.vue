<template>
  <v-bottom-navigation class="pt-2" :value="activeBtn" fixed color="#000">
    <v-btn v-for="(item, index) in items" :key="index" :to="item.link">
      <span>{{ item.title }}</span>
      <v-icon>{{ item.icon }}</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  data() {
    return {
      activeBtn: 1,
      items: [
        {
          title: "アカウント",
          icon: "mdi-account-circle-outline",
          link: { name: "Account" }
        },
        {
          title: "記録",
          icon: "mdi-bulletin-board",
          link: { name: "Recode" }
        },
        {
          title: "みんなの記録",
          icon: "mdi-content-save-all",
          link: { name: "Allworks" }
        },
        {
          title: "使い方",
          icon: "mdi-mouse-variant",
          link: { name: "Howto" }
        }
      ]
    };
  }
};
</script>
