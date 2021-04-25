<template>
  <v-chart class="chart" :option="option" />
</template>

<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { GaugeChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  ToolboxComponent,
  DataZoomComponent,
  VisualMapComponent,
  TimelineComponent,
  CalendarComponent
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import { ref, defineComponent } from "vue";

use([
  CanvasRenderer,
  GaugeChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  ToolboxComponent,
  DataZoomComponent,
  VisualMapComponent,
  TimelineComponent,
  CalendarComponent
]);

export default defineComponent({
  name: "UserProgressChart",
  components: {
    VChart
  },
  provide: {
    [THEME_KEY]: "dark"
  },
  setup: () => {
    const option = ref({
      series: [{
        type: 'gauge',
        startAngle: 160,
        endAngle: 20,
        min: 0,
        max: 1,
        splitNumber: 8,
        title: {
          text: "studio Progress",
          offsetCenter: [0, '-20%'],
          fontSize: 30
        },
        axisLine: {
          lineStyle: {
            width: 6,
            color: [
              [0.25, '#FF6E76'],
              [0.5, '#FDDD60'],
              [0.75, '#58D9F9'],
              [1, '#7CFFB2']
            ]
          }
        },
        pointer: {
          icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
          length: '12%',
          width: 20,
          offsetCenter: [0, '-62%'],
          itemStyle: {
              color: 'auto'
          }
        },
        axisTick: {
          length: 10,
          lineStyle: {
              color: 'auto',
              width: 1
          }
        },
      splitLine: {
          length: 20,
          lineStyle: {
              color: 'auto',
              width: 4
          }
        },
        axisLabel: {
          color: '#464646',
          fontSize: 16,
          distance: -60,
          formatter: function (value) {
            if (value === 0.875) {
              return 'Yeah\n\\o/';
            }
            else if (value === 0.625) {
              return 'Oh !';
            }
            else if (value === 0.375) {
              return 'Meh..';
            }
            else if (value === 0.125) {
              return 'Sob';
            }
          }
        },
        detail: {
          fontSize: 30,
          offsetCenter: [0, -60, '0%'],
          valueAnimation: true,
          formatter: function (value) {
              return Math.round(value * 100) + '%';
          },
          color: 'auto'
        },
        data: [{
          value: 0.70,
          name: 'Screens Off'
        }]
      }]
    });

    return { option };
  }
});
</script>

<style scoped>
.chart {
  height: 400px;
}
</style>
