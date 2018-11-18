import request from '@/utils/request'

export function loginByUsername (username, password) {
  const data = {
    username,
    password
  }
  return request({
    url: '/login/login',
    method: 'post',
    data
  })
}

export function logout () {
  return request({
    url: '/login/logout',
    method: 'post'
  })
}

export function getUserInfo (token) {
  return new Promise((resolve, reject) => {
    resolve({data: {
      name: 'jim',
      roles: ['admin'],
      avatar: 'sss',
      introduction: 'sssxx'
    }})
  }).then(res => {
    return res
  })
  // return request({
  //   url: '/user/info',
  //   method: 'get',
  //   params: { token }
  // })
}
