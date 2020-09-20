<template>
  <v-footer class="padless" width="100vw">
    <v-card flat tile width="100%" class="text-center">
      <v-card-text>
        <v-btn
          class="mx-4"
          text
          v-for="(icon, i) in icons"
          :key="i"
          :href="icon.link"
          target="_blank"
        >
          <v-icon :color="icon.color" size="24px">{{ icon.icon }}</v-icon>
        </v-btn>
      </v-card-text>
      <v-card-text>
        <v-icon>mdi-gmail</v-icon>
        {{ gmail }}
      </v-card-text>
      <v-divider></v-divider>

      <v-card-text>
        {{ new Date().getFullYear() }} —
        <strong>&copy; Knowder</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      gmail: "taiga248@gmail.com",
      icons: [
        {
          icon: "mdi-twitter",
          link: "https://twitter.com/En_358",
          color: "primary"
        },
        {
          icon: "mdi-github",
          link: "https://github.com/taiga248",
          color: "black"
        }
      ]
    };
  }
};
</script>
