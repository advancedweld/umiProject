import axios from 'axios'
import Cookies from 'js-cookie'

const IS_PROD = false

// axios 默认配置
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded'
console.log('@@@@@@@环境变量', process.env)

// 存储路由跳转时，需要cancel的接口
const requestMap = new Map()
const instance = axios.create({
  withCredentials: true,
  /* 超时时间10s */
  timeout: 10000,
  baseURL: IS_PROD ? 'http://localhost:3000' : 'http://139.224.75.239',
  /* 自定义header */
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'customer-header': 'customer-header',
    'x-client-agent': 'xiangshangzhi---web',
  },
})

/**
 * 请求拦截
 */
instance.interceptors.request.use((config: any) => {
  /* 设置cookie */
  const cookie = Cookies.get()
  Cookies.remove('myCustomContent')
  Cookies.set('token', 'myCustomContent')
  console.log('@@@@@@@cookie', cookie)

  config.headers['Mycookie'] = 'mynamecookie'
  config.headers['Authorization '] = 'token = mynametoken'

  console.log('@@@@@@@config request11', config)
  if (config.cancelToken) {
    const source = axios.CancelToken.source()
    config.axiosKey = config.url.split('?')[0]
    config.cancelToken = source.token
    // 如果存在就未完结的就cancel
    if (requestMap.has(config.axiosKey)) {
      requestMap.get(config.axiosKey).cancel()
    }
    requestMap.set(config.axiosKey, source)
  }
  return config
})

/**
 * 结果拦截
 */
instance.interceptors.response.use(
  (response: any) => {
    console.log('@@@@@@@config response', response)
    const {
      config: { axiosKey },
    } = response
    requestMap.delete(axiosKey)
    return response
  },
  (error: any) => {
    console.log('@@@@@@@config response error', error)
    // return Promise.reject(error)
    return Promise.resolve(error)
  },
)

export default instance
