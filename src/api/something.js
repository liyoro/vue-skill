/*
 * @Author: liyoro
 * @since: 2022-03-10 15:29:23
 * @lastTime: 2022-03-10 15:30:26
 */
import mrequest from '@/utils/mock-request'
import defaultSettings from '@/settings'
const { publicPath } = defaultSettings

export const somethingData = () => {
  return mrequest({
    url: publicPath + `/data/something.json`,
    method: 'get'
  })
}
