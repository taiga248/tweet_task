<template>
  <v-content>
    <HomeHero />
    <HomeMain />
    <HomeFooter />
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
