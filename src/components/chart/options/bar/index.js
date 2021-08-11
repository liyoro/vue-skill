/*
 * @Author: liyoro
 * @since: 2021-05-24 17:34:27
 * @lastTime: 2021-08-11 17:46:08
 */
const testBar = (data) => {
  const defaultConfig = {
    title: {
      text: 'ECharts 入门示例'
    },
    tooltip: {},
    legend: {
      data: ['销量']
    },
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }
    ]
  }

  const opt = Object.assign({}, defaultConfig)
  const { grid, title, tooltip, xAxis, yAxis, series } = opt
  const chartOpt = {
    grid,
    title,
    tooltip,
    xAxis,
    yAxis,
    series
  }
  return chartOpt
}

export default {
  testBar
}
