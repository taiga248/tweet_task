<template>
  <section>
    <CTA />
    <v-footer padless>
      <v-card flat tile width="100%" class="text-center">
        <v-divider></v-divider>
        <v-card-text>
          <v-btn
            class="mx-4"
            text
            v-for="(icon, i) in icons"
            :key="i"
            :href="icon.link"
            target="_blank"
          >
            <v-icon :color="icon.color" size="24px" v-text="icon.icon"></v-icon>
          </v-btn>
        </v-card-text>
        <v-card-text>
          <v-icon left v-text="gmail.icon"></v-icon>
          <span v-text="gmail.address"></span>
        </v-card-text>
        <v-divider></v-divider>

        <v-card-text>
          {{ new Date().getFullYear() }} —
          <strong>&copy; Knowder</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </section>
</template>

<script>
import CTA from "@/components/Home/HomeCTA";

export default {
  components: {
    CTA
  },
  data() {
    return {
      gmail: { icon: "mdi-gmail", address: "taiga248@gmail.com" },
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
