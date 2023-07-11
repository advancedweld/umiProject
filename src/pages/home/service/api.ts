import request from '@/utils/request'

const getHomeData = () => request.get('/api/home')

export { getHomeData }
