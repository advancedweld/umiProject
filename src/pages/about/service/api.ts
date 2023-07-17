import { Axios, AxiosResponse } from 'axios'
import request from '@/utils/request'
import { AboutUsResponse } from './type'
const getAboutUsData: () => Promise<AxiosResponse<AboutUsResponse, any>> = () => request.get('/api/AboutUsInfomation')

export { getAboutUsData }
