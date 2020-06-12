<template>
  <v-card class="ma-4" height="600">
    <v-card-text>
      <h2 class="text-center my-3">今日やったこと</h2>
      <v-form class="mx-5 my-10">
        <!-- <v-select :items="tags" :v-model="tagChecked()" label="タグ"></v-select> -->
        <v-select :items="tags" label="タグ"></v-select>
        <p class="text-center">
          何時間作業した？
          <span class="title">- {{ working_time }}h -</span>
        </p>
        <v-slider v-model="working_time" max="12"></v-slider>
        <v-textarea outlined v-model="text" :rules="textRules" label="内容"></v-textarea>

        <div class="text-center mb-10">
          <v-btn>キャンセル</v-btn>
          <v-btn color="info" class="ml-2" @click="save">記録</v-btn>
        </div>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      tags: ["仕事", "勉強", "課題"],
      tagChecked: [],
      working_time: 4,
      text: "",
      textRules: [v => !!v || "入力必須です"]
    };
  },
  methods: {
    save() {
      console.log(
        this.tagChecked + " : " + this.working_time + " : " + this.text
      );
    }
  }
};
</script>

<style></style>
