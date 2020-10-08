<template>
  <v-content class="pa-0">
    <section>
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
