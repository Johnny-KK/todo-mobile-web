<template>
  <div class="gc-layout-main">
    <div class="header">
      <gc-icon name="chart"></gc-icon>
      <span>数据报表</span>
    </div>

    <div class="gc-layout-scroll">
      <div class="chat-contain"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import echarts from "echarts";

@Component
export default class Report extends Vue {
  mounted() {
    // this.initChat();
  }

  initChat() {
    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(
      document.querySelector("div.chat-contain") || new HTMLDivElement()
    );
    // 绘制图表
    myChart.setOption({
      title: { text: "任务完成趋势" },
      xAxis: {
        data: ["02.21", "02.22", "02.23", "02.24", "02.25", "02.26"]
      },
      yAxis: {},
      series: [
        {
          smooth: true,
          type: "line",
          data: [2, 3, 5, 2, 4, 1]
        }
      ]
    });
  }
}
</script>

<style lang="scss" scoped>
.header {
  @include flex-c(h);
  background-color: $c-app-theme;
  color: $c-white;
  height: 44px;
  padding: 0 15px;
}

.chat-contain {
  height: 150px;
  width: 100%;
}
</style>
