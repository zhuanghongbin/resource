// import request from '@/utils/request'
// axios 使用application / x-www-form-urlencoded格式
// 参数里面要传数组呢，只需要在qs的方法中设置它的indices为false即可，如：
// qs.stringify({a:['b','c','d']},{indices:false});
// import qs from 'qs'

export function loginByUsername (username, password) {
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
  // const data = {
  //   username,
  //   password
  // }
  // return request({
  //   url: '/login/login',
  //   method: 'post',
  //   data //data: qs.stringify(data)
  // })
}

export function logout () {
  return new Promise((resolve, reject) => {
    resolve()
  }).then(res => {
    return res
  })
  // return request({
  //   url: '/logout',
  //   method: 'post'
  // })
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
