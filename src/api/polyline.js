/*
 * @Author: liyoro
 * @since: 2021-08-20 09:15:21
 * @lastTime: 2021-08-20 09:15:54
 */
import mrequest from '@/utils/mock-request'
import defaultSettings from '@/settings'
const { publicPath } = defaultSettings

export const polylineData = () => {
  return mrequest({
    url: publicPath + `/data/polyline.json`,
    method: 'get'
  })
}
