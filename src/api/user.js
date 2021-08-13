import request from '@/utils/request'
import mrequest from '@/utils/mock-request'
import defaultSettings from '@/settings'
const { publicPath } = defaultSettings

export function login(data) {
  return request({
    url: '/vue-admin-template/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}

export const user = () => {
  return mrequest({
    url: publicPath + `data/user.json`,
    method: 'get'
  })
}
