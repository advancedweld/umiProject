import axios from 'axios'
import Cookies from 'js-cookie'

/* 生产环境API地址 */
const API_GATEWAY_PRO = 'http://139.224.75.239'
/* 开发环境API地址 */
const API_GATEWAY_DEV = 'http://139.224.75.239'

const IS_PROD = process.env.NODE_ENV === 'production'

// axios 默认配置
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded'
console.log('@@@@@@@环境变量', process.env)

// 存储路由跳转时，需要cancel的接口
const instance = axios.create({
  withCredentials: true,
  /* 超时时间10s */
  timeout: 10000,
  baseURL: IS_PROD ? API_GATEWAY_PRO : API_GATEWAY_DEV,
  /* 自定义header */
  headers: {
    // 'X-Requested-With': 'XMLHttpRequest',
    // 'customer-header': 'customer-header',
    // 'x-client-agent': 'xiangshangzhi---web',
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

  config.headers['Authorization'] = 'token = mynametoken'

  console.log('@@@@@@@config request11', config)
  if (config.cancelToken) {
    const source = axios.CancelToken.source()
    config.axiosKey = config.url.split('?')[0]
    config.cancelToken = source.token
  }
  return config
})

/**
 * 结果拦截
 */
instance.interceptors.response.use(
  (response: any) => {
    console.log('@@@@@@@config response', response)
    return response
  },
  (error: any) => {
    console.log('@@@@@@@config response error', error)
    // return Promise.reject(error)
    return Promise.resolve(error)
  },
)

export default instance
