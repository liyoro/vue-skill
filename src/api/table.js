/*
* @Author: liyoro
* @Date:   2021-07-14 16:46:10
* @Last Modified by:   liyoro
* @Last Modified time: 2021-07-14 16:52:48
*/
import mrequest from '@/utils/mock-request'
import defaultSettings from '@/settings'
const { publicPath } = defaultSettings

export const tableData = () => {
  return mrequest({
    url: publicPath + `/data/table.json`,
    method: 'get'
  })
}

