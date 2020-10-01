<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  // 現段階では一度違うコンポーネントに遷移しないと反映されない
  // beforeUpdateの時にfetchすればいけると思ったんだけどなあ
  // これ使うとリアクティブにできるっぽい
  // mixins: [mixins.reactiveData],
  props: {
    chartData: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: null
    }
  },
  mounted() {
    this.renderChart(this.chartData, this.options);
  }
};
</script>
