/*
 * @Author: xiangshangzhi
 * @Date: 2023-07-17 08:59:42
 * @FilePath: \umiProject\src\pages\news\service\type.ts
 * @Description:关于我们模块接口类型定义
 */

type NewsDto = {
  id: number
  newsDesc: string
  newsDetail: string
  newsName: string
  newsPicUrl: string
  newsTime: string
}

type HotNewsResponse = {
  newsDtos: NewsDto
}

type NewsListResponse = {
  count: number
  objectList: NewsDto[]
  pageNum: number
  pageSize: number
}

export type { HotNewsResponse, NewsListResponse }
