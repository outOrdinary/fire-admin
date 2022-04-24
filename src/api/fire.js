import request from '@/utils/request'
// import qs from 'qs'

// 用户认证登录
export function authLogin (params) {
  var data = fromData(params)
  return request({
    url: '/userAuth/authLogin',
    method: 'post',
    data
  })
}

// 获取随机数
export function getAuthRandom (params) {
  var data = fromData(params)
  return request({
    url: '/userAuth/getRandom',
    method: 'post',
    data
  })
}

// 保活
export function keepAlive (params) {
  var data = fromData(params)
  return request({
    url: '/userAuth/keepAlive',
    method: 'post',
    data
  })
}

function fromData (params) {
  let formData = new FormData()
  for (const it in params) {
    if (!Object.is(params[it], null) && !Object.is(params[it], '')) {
      formData.append(it, params[it])
    }
  }
  return formData
}
