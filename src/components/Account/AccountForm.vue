<template>
  <v-card>
    <v-card-text>
      <h2 class="text-center my-3">今日やったこと</h2>
      <v-form class="mx-5 px-1 my-5">
        <v-select :items="tags" v-model="tagChecked" label="タグ"></v-select>
        <p class="text-center">
          何時間作業した？
          <span class="title">- {{ select_time }}h -</span>
        </p>
        <v-slider v-model.number="select_time" max="12"></v-slider>
        <v-textarea
          outlined
          v-model="text"
          :rules="textRules"
          label="内容"
        ></v-textarea>

        <div class="text-center mb-10">
          <v-btn @click="form_init">キャンセル</v-btn>
          <v-btn color="info" class="ml-1" @click="save">記録</v-btn>
        </div>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";
// ゆくゆくはこのコンポーネントなくすかも
export default {
  data() {
    return {
      tags: [
        this.$store.state.tags[0].name,
        this.$store.state.tags[1].name,
        this.$store.state.tags[2].name
      ],
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
    this.work_time = this.$store.state.times.work_sum;
    this.task_time = this.$store.state.times.task_sum;
    this.study_time = this.$store.state.times.study_sum;
  },
  methods: {
    save() {
      const work_data = {
        tag: this.tagChecked,
        time: this.select_time,
        text: this.text,
        createAt: this.now
      };
      let times = {
        sum: work_data.time,
        work_sum: this.work_time,
        task_sum: this.task_time,
        study_sum: this.study_time
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
