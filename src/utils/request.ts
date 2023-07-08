import axios from 'axios'

const IS_PROD = false

// axios 默认配置
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded'
// console.log('@@@@@@@环境变量', import.meta.env)

// 存储路由跳转时，需要cancel的接口
const requestMap = new Map()
const instance = axios.create({
  /* 超时时间10s */
  timeout: 10000,
  baseURL: IS_PROD ? 'http://localhost:3000' : '',
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
  console.log('@@@@@@@config request', config)
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
instance.interceptors.response.use((response: any) => {
  console.log('@@@@@@@config response', response)
  const {
    config: { axiosKey },
  } = response
  requestMap.delete(axiosKey)
  return response
})

export default instance
