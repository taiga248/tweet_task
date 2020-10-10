<template>
  <v-container>
    <section>
      <h2 class="terxt-center">使い方</h2>
      <v-layout wrap>
        <v-flex
          xs12
          sm6
          md3
          class="mx-auto"
          v-for="(img, i) in mainImgs"
          :key="i"
        >
          <h3 class="subtitle-1 pl-5">
            <span class="title">0{{ i + 1 }}.</span>
            {{ img.text }}
          </h3>
          <v-img class="my-5 mx-auto" :src="img.path" width="220"></v-img>
        </v-flex>
      </v-layout>
    </section>
    <section>
      <h2 class="terxt-center">その他</h2>
      <v-layout wrap>
        <v-flex xs12 sm4 class="mx-auto" v-for="(img, i) in otherImgs" :key="i">
          <h3 class="subtitle-1 pl-5">
            <span class="subtitle-1">{{ img.text }}</span>
          </h3>
          <v-img class="my-5 mx-auto" :src="img.path" width="220"></v-img>
        </v-flex>
      </v-layout>
    </section>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      mainImgs: [
        {
          text: "自分のページ",
          path: require("@/assets/home/Account-min.png")
        },
        {
          text: "作業を記録する",
          path: require("@/assets/home/addTime-min.png")
        },
        {
          text: "グラフで記録を見る",
          path: require("@/assets/home/chart-min.png")
        },
        {
          text: "みんなの記録を見る",
          path: require("@/assets/home/allUser-min.png")
        }
      ],
      otherImgs: [
        {
          text: "ホームに追加できます",
          path: require("@/assets/home/addToHome-min.png")
        },
        {
          text: "作業時間を共有できます",
          path: require("@/assets/home/addToHome-min.png")
        }
      ]
    };
  }
};
</script>
