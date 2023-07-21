import { Axios, AxiosResponse } from 'axios'
import request from '@/utils/request'
import { HotNewsResponse, NewsListResponse } from './type'
const getHotNews: () => Promise<AxiosResponse<HotNewsResponse, any>> = () => request.get('/api/hotNews')

const fetchNewsList: (
  pageNum: number,
  pageSize: number,
) => Promise<
  AxiosResponse<
    NewsListResponse,
    {
      pageNum: number
      pageSize: number
    }
  >
> = (pageNum, pageSize) => request.post('/api/newsPager', { pageNum, pageSize })

export { getHotNews, fetchNewsList }
