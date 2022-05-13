// import echarts from 'echarts'
import * as echarts from 'echarts'
import mapbg from '@/assets/images/map-bg.png'

const getSimpleMap = (jsonMap, data, config) => {
  if (!echarts.getMap(jsonMap.mark)) {
    echarts.registerMap(jsonMap.mark, jsonMap.json)
  }
  const convertData = (data) => {
    console.log(data)
    var res = []
    for (var i = 0; i < data.length; i++) {
      const mapData = data[i].hoverObj
      const center = data[i].mapProperty.center

      if (center && mapData) {
        res.push({
          name: mapData.name,
          value: center.concat(mapData.num)
        })
      }
    }
    return res
  }
  const defaultConfig = {
    tooltip: {
      // 窗口外框
      trigger: 'item',
      padding: 0,
      borderWidth: 0,
      borderColor: '#FFFFFF',
      backgroundColor: '#FFFFFF',
      formatter: (params) => {
        const { data } = params
        const str = `<div style="width:300px;height: 98px;box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.8);
                    color: #fff;text-align:left;border-radius: 6px;">
                    <div style="background-color: rgba(102, 182, 255, 1);height: 44px;line-height: 44px;font-size:14px;font-weight:400;border-top-left-radius: 6px;border-top-right-radius: 6px;display: flex;align-items: center;">
                        <img style="width: 13px;height:16px;margin-left: 24px;margin-right: 3px;" src="images/map-ic.png">${data.name}
                    </div>
                    <div style="width: 100%;height:54px;display: flex;flex-wrap: wrap;">
                        <div style="display: flex;justify-content: space-between;width: 100%;padding-left:15px;padding-right: 15px;">
                            <div style="display:flex;align-items:center;width:132px;">
                                <div style="font-size: 12px;color: #555555;margin-right:10px;">区号：</div>
                                <div style="font-size: 14px;color: #333333;">${data.hoverObj == null ? '' : data.hoverObj.adcode}</div>
                            </div>
                        </div>
                    </div>
                </div>`
        return str
      }
    },
    geo: {
      map: jsonMap.mark,
      type: 'map',
      layoutCenter: ['50%', '50%'],
      layoutSize: '150%',
      zoom: 0.65,
      roam: false,
      // 样式一
      // itemStyle: {
      //   normal: {
      //     areaColor: 'rgba(13, 110, 191, 1)',
      //     shadowColor: 'rgba(13, 110, 191, 0.5)',
      //     shadowOffsetX: 6,
      //     shadowOffsetY: 12
      //   }
      // }
      // 样式二
      itemStyle: {
        normal: {
          borderColor: '#AEF3FF',
          borderWidth: 2,
          areaColor: {
            image: mapbg, //
            repeat: 'repeat' // // 是否平铺，可以是 'repeat-x', 'repeat-y', 'no-repeat'
          },
          shadowColor: 'rgba(13, 110, 191, 0.5)',
          shadowOffsetX: 6,
          shadowOffsetY: 12
        }
      }
    },
    series: [
      {
        type: 'map',
        map: jsonMap.mark, // 自定义扩展图表类型
        zoom: 0.65, // 缩放
        animationDuration: 1200,
        // 点击选中后的效果
        select: {
          label: {
            color: '#FFFFFF',
            fontSize: 12,
            fontWeight: 400
          },
          // 清除点击选中后的背景色
          itemStyle: {
            color: null
          }
        },
        // 样式一
        // itemStyle: {
        //   // 地图样式
        //   normal: {
        //     borderColor: '#FFFFFF',
        //     borderWidth: 3,
        //     areaColor: 'rgba(201, 229, 255, 1)'
        //   }
        // },
        // 样式二
        itemStyle: {
          // 地图样式
          normal: {
            borderColor: '#AEF3FF',
            borderWidth: 2,
            areaColor: {
              image: mapbg, //
              repeat: 'repeat' // // 是否平铺，可以是 'repeat-x', 'repeat-y', 'no-repeat'
            }
          }
        },
        // 样式一
        // label: {
        //   show: true,
        //   color: '#666666',
        //   fontSize: 12,
        //   fontWeight: 400
        // },
        // 样式二
        label: {
          show: true,
          color: '#FFFFFF',
          fontSize: 12,
          fontWeight: 400
        },
        emphasis: {
          // 鼠标移入动态的时候显示的默认样式
          label: {
            show: true,
            color: '#FFFFFF',
            fontSize: 15,
            fontWeight: 600
          },
          itemStyle: {
            areaColor: 'rgba(102, 182, 255, 0.7)',
            borderColor: '#FFFFFF',
            borderWidth: 2
          }
        },
        layoutCenter: ['50%', '50%'],
        layoutSize: '150%',
        data: data
      },
      {
        type: 'effectScatter',
        coordinateSystem: 'geo',
        symbol: 'image://data:image/png;base64,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',
        symbolSize: [16, 16],
        // symbolOffset: [],
        label: {
          normal: {
            show: true,
            offset: [0, -18],
            textStyle: {
              color: '#fff',
              fontSize: 12,
              fontWeight: 500
            },
            formatter(value) {
              return '{a|' + value.data.value[2] + '}'
            },
            rich: {
              a: {
                color: '#FFFFFF',
                backgroundColor: '#06406A',
                width: 28,
                height: 16,
                lineHeight: 16,
                align: 'center',
                borderWidth: 1,
                borderColor: '#79D6FE',
                borderRadius: 2,
                padding: [0, 4, 0, 4]
              }
            }
          }
        },
        itemStyle: {
          normal: {
            color: 'rgba(255, 178, 76, 1)'
          }
        },
        data: convertData(data),
        showEffectOn: 'render',
        rippleEffect: {
          brushType: 'stroke'
        },
        hoverAnimation: true,
        zlevel: 9
      }
    ]
  }
  const opt = Object.assign({}, defaultConfig, config)
  const { legend, tooltip, series, geo, grid } = opt
  const chartOpt = {
    grid,
    legend,
    tooltip,
    geo,
    series
  }
  return chartOpt
}

export default {
  getSimpleMap
}
