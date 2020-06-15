<template>
  <v-card class="ma-4" height="600">
    <v-card-text>
      <h2 class="text-center my-3">今日やったこと</h2>
      <v-form class="mx-5 my-10">
        <v-select :items="tags" v-model="tagChecked" label="タグ"></v-select>
        <p class="text-center">
          何時間作業した？
          <span class="title">- {{ working_time }}h -</span>
        </p>
        <v-slider v-model="working_time" max="12"></v-slider>
        <v-textarea outlined v-model="text" :rules="textRules" label="内容"></v-textarea>

        <div class="text-center mb-10">
          <v-btn @click="form_init">キャンセル</v-btn>
          <v-btn color="info" class="ml-2" @click="save">記録</v-btn>
        </div>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      tags: ["仕事", "勉強", "課題"],
      tagChecked: "",
      working_time: 4,
      text: "",
      now: new Date(),
      textRules: [v => !!v || "入力必須です"]
    };
  },
  methods: {
    save() {
      const work_data = {
        tag: this.tagChecked,
        time: this.working_time,
        text: this.text,
        createAt: this.now
      };
      // this.totalTime(this.working_time);
      this.addWork(work_data);
      this.$router.push({ name: "Recode" });
    },
    form_init() {
      this.tagChecked = "";
      this.time = "";
      this.text = "";
    },
    ...mapActions(["addWork", "totalTime"])
  }
};
</script>

<style></style>
