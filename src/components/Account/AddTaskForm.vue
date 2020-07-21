<template>
  <v-card class="ma-4" height="600">
    <v-card-text>
      <h2 class="text-center my-3">今日やったこと</h2>
      <v-form class="mx-5 my-10">
        <v-select :items="tags" v-model="tagChecked" label="タグ"></v-select>
        <p class="text-center">
          何時間作業した？
          <span class="title">- {{ select_time }}h -</span>
        </p>
        <v-slider v-model.number="select_time" max="12"></v-slider>
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
      select_time: 4,
      work_time: 0,
      study_time: 0,
      task_time: 0,
      text: "",
      now: new Date(),
      textRules: [v => !!v || "入力必須です"]
    };
  },
  created() {
    this.work_time = this.$store.state.work_sum;
    this.study_time = this.$store.state.study_sum;
    this.task_time = this.$store.state.task_sum;
    console.log("Created 仕事 " + this.work_time);
    console.log("Created 勉強 " + this.study_time);
    console.log("Created 課題 " + this.task_time);
  },
  methods: {
    save() {
      // 何もなかったら弾こうね あとで
      // if(!text) return
      const work_data = {
        tag: this.tagChecked,
        time: this.select_time,
        text: this.text,
        createAt: this.now
      };
      let times = {
        sum: work_data.time,
        work_sum: this.work_time,
        study_sum: this.study_time,
        task_sum: this.task_time
      };
      switch (work_data.tag) {
        case "仕事":
          times.work_sum += work_data.time;
          console.log("仕事が選択されました。");
          break;
        case "勉強":
          times.study_sum += work_data.time;
          console.log("勉強が選択されました。");
          break;
        case "課題":
          times.task_sum += work_data.time;
          console.log("課題が選択されました。");
          break;
        default:
          break;
      }
      this.addWork(work_data);
      this.addTime(times);
      console.log("Times : ");
      console.log(times);

      this.$router.push({ name: "Recode" });
    },
    form_init() {
      this.tagChecked = "";
      this.time = "";
      this.text = "";
    },
    ...mapActions(["addWork", "addTime"])
  }
};
</script>
