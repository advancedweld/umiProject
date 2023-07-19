import { Axios, AxiosResponse } from 'axios'
import request from '@/utils/request'
import { NewsDetailResponse } from './type'
const getNewsDetail: (newsId: string) => Promise<AxiosResponse<NewsDetailResponse, any>> = (newsId) =>
  request.get(`/api/newsDetail/${newsId}`)

export { getNewsDetail }
