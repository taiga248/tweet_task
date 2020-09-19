<script>
import { mapActions } from "vuex";
import { Bar } from "vue-chartjs";
// 記録画面で更新をすると、グラフのデータが反映されない
// DBのデータと常につないでおく処理を書く
export default {
  extends: Bar,
  name: "chart",
  // created() {
  //   this.fetchTime();
  // },
  data() {
    return {
      data: {
        labels: ["仕事", "課題", "勉強"],
        datasets: [
          {
            label: ["Total"],
            data: [
              this.$store.state.times.work_sum,
              this.$store.state.times.study_sum,
              this.$store.state.times.task_sum
            ],
            backgroundColor: [
              "rgba(54, 162, 235, 0.2)",
              "rgba(48, 209, 88, 0.2)",
              "rgba(255, 99, 132, 0.2)"
            ],
            borderColor: [
              "rgba(54, 162, 235, 1)",
              "rgba(48, 209, 88, 1)",
              "rgba(255, 99, 132, 1)"
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
    // this.fetchTime();
  },
  methods: {
    ...mapActions(["fetchTime"])
  }
};
</script>
