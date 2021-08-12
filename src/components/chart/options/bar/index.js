/*
 * @Author: liyoro
 * @since: 2021-05-24 17:34:27
 * @lastTime: 2021-08-12 16:58:57
 */
const testBar = (data) => {
  const defaultConfig = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar'
    }]
  }

  const opt = Object.assign({}, defaultConfig)
  return opt
}

export default {
  testBar
}
