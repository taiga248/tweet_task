<template>
  <v-content class="pa-0">
    <section v-if="!this.$store.state.login_user">
      <HomeHero />
      <HomeMain />
      <HomeFooter />
    </section>
  </v-content>
</template>

<script>
import HomeHero from "@/components/Home/HomeHero";
import HomeMain from "@/components/Home/HomeMain";
import HomeFooter from "@/components/Home/HomeFooter";

export default {
  components: {
    HomeHero,
    HomeMain,
    HomeFooter
  }
};
</script>
