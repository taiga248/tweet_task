<script>
import { Bar } from "vue-chartjs";
// 記録画面で更新をすると、グラフのデータが反映されない
// DBのデータと常につないでおく処理を書く

let w_time;
let t_time;
let s_time;

export default {
  extends: Bar,
  name: "chart",
  created() {
    w_time = this.$store.state.times.work_sum;
    t_time = this.$store.state.times.task_sum;
    s_time = this.$store.state.times.study_sum;
  },
  data() {
    return {
      data: {
        labels: [
          this.$store.state.tags[0].name,
          this.$store.state.tags[1].name,
          this.$store.state.tags[2].name
        ],
        datasets: [
          {
            label: ["Total"],
            data: [
              // 更新したときに仕事と課題が0になるここら辺が怪しい
              w_time,
              t_time,
              s_time
            ],
            backgroundColor: [
              this.$store.state.tags[0].bg_color,
              this.$store.state.tags[1].bg_color,
              this.$store.state.tags[2].bg_color
            ],
            borderColor: [
              this.$store.state.tags[0].color,
              this.$store.state.tags[1].color,
              this.$store.state.tags[2].color
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                stepSize: 5
              }
            }
          ]
        }
      }
    };
  },
  mounted() {
    this.renderChart(this.data, this.options);
  }
};
</script>
