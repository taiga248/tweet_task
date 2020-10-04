<template>
  <v-bottom-navigation class="pt-2" :value="activeBtn" grow fixed color="#000">
    <v-btn v-for="(item, index) in items" :key="index" :to="item.link">
      <div v-if="index === 2">
        <v-dialog v-model="addTaskFormDrawer" width="500">
          <template v-slot:activator="{ on, attrs }">
            <v-btn text v-bind="attrs" v-on="on">
              <v-icon>{{ item.icon }}</v-icon>
            </v-btn>
          </template>
          <v-card>
            <v-card-title title>今日やったこと</v-card-title>
            <v-card-text>
              <v-form class="px-3">
                <v-select
                  :items="tags"
                  v-model="tagChecked"
                  label="タグ"
                ></v-select>
                <p class="text-center">
                  何時間作業した？
                  <span class="title">- {{ select_time }}h -</span>
                </p>
                <v-slider v-model.number="select_time" max="12"></v-slider>
                <v-textarea outlined v-model="text" label="内容"></v-textarea>

                <div class="text-center mb-10">
                  <v-btn @click="form_init">キャンセル</v-btn>
                  <v-btn color="info" class="ml-1" @click="save">記録</v-btn>
                </div>
              </v-form>
            </v-card-text>
          </v-card>
        </v-dialog>
      </div>
      <v-icon v-else>{{ item.icon }}</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      addTaskFormDrawer: false,
      tags: [
        this.$store.state.tags[0].name,
        this.$store.state.tags[1].name,
        this.$store.state.tags[2].name
      ],
      tagChecked: "",
      select_time: 4,
      work_time: 0,
      task_time: 0,
      study_time: 0,
      text: "",
      now: new Date(),
      activeBtn: 1,
      items: this.$store.state.pageItem
    };
  },
  created() {
    this.work_time = this.$store.state.times.work_sum;
    this.task_time = this.$store.state.times.task_sum;
    this.study_time = this.$store.state.times.study_sum;
  },
  methods: {
    save() {
      this.addTaskFormDrawer = false;
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
        case this.tags[0]: // 仕事
          times.work_sum += work_data.time;
          break;
        case this.tags[1]: // 課題
          times.task_sum += work_data.time;
          break;
        case this.tags[2]: // 勉強
          times.study_sum += work_data.time;
          break;

        default:
          break;
      }
      this.addWork(work_data);
      this.addTime(times);
      this.form_init();
    },
    form_init() {
      if (this.addTaskFormDrawer === true) this.addTaskFormDrawer = false;
      this.tagChecked = "";
      this.time = "";
      this.text = "";
    },
    ...mapActions(["addWork", "addTime"])
  }
};
</script>
