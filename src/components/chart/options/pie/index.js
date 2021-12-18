/*
 * @Author: liyoro
 * @since: 2021-12-15 17:41:38
 * @lastTime: 2021-12-16 09:23:49
 */
import 'echarts/lib/chart/pie'

const getPieChart = (data, color) => {
  const defaultConfig = {
    backgroundColor: '#fff',
    tooltip: {
      show: true
    },
    color: color,
    series: [
      {
        type: 'pie',
        radius: ['68%', '90%'],
        center: ['50%', '50%'],
        hoverAnimation: true,
        z: 10,
        itemStyle: {
          normal: {
            borderWidth: 4,
            borderColor: '#fff'
          }
        },
        label: {
          show: false
        },
        data: data,
        labelLine: {
          show: false
        }
      }
    ]
  }

  const opt = Object.assign({}, defaultConfig)
  const { grid, tooltip, xAxis, yAxis, title, series } = opt
  const chartOpt = {
    color,
    grid,
    tooltip,
    xAxis,
    yAxis,
    title,
    series
  }
  return chartOpt
}

export default { getPieChart }
