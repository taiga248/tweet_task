<template>
  <div v-show="loading">
    <div class="load">
      <vue-loading
        class="load__item"
        type="bars"
        color="rgb(10,132,255)"
        :size="{ width: '100px', height: '100px' }"
      ></vue-loading>
    </div>
  </div>
</template>

<script>
import { VueLoading } from "vue-loading-template";

export default {
  name: "loading",
  props: {
    loading: {
      type: Boolean
    }
  },
  components: {
    VueLoading
  }
};
</script>

<style scoped>
.load {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.load__item {
  /* ちょっと左にずれるのどうにかしたい */
  margin: 0 0 0 5vw;
}
</style>
