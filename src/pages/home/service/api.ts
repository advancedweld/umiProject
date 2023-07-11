import request from '@/utils/request'

const getHomeData = () => request.get('/home')

export { getHomeData }
