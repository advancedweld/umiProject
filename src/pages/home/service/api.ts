import { Axios, AxiosResponse } from 'axios'
import request from '@/utils/request'
import { HomeDataResponse } from './type'
const getHomeData: () => Promise<AxiosResponse<HomeDataResponse, any>> = () =>
  request.get('/api/home')

export { getHomeData }
