/*
 * @Author: liyoro
 * @since: 2022-03-07 10:47:52
 * @lastTime: 2022-03-08 15:39:20
 */

import axios from 'axios'
import defaultSettings from '@/settings'
const { publicPath } = defaultSettings

export const mapRequest = (url) => {
  return axios.get(publicPath + `/data/${url}.json`)
}
