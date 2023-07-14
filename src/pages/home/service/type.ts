/*
 * @Author: xiangshangzhi
 * @Date: 2023-07-12 11:50:39
 * @FilePath: \umiProject\src\pages\home\service\type.ts
 * @Description: 类型定义
 */

type _DataBaseDto = {
  /* 数据库描述 */
  dataBaseDesc: string
  /* 数据库名称 */
  dataBaseName: string
  /* 数据库详情URL */
  dataBasedetailUrl: string
  /* 数据库ID */
  id: number
  /* 图片URL */
  picUrl: string
}

type _DataClusterDto = {
  /* 数据库列表 */
  dataBaseDtos: DataBaseDto[]
  subTitle: string
  dataClusterInfoDtos: {
    count?: string
    name?: string
    unit?: string
  }[]
}

/* 数字化应用模块 */
type _DigitalApplicationDomDto = {
  subtitle: string
  digitalApplicationDtos: DigitalApplicationDto[]
}

type DigitalApplicationDto = {
  /* 数字应用描述 */
  digitalApplicationDesc?: string
  /* 数字应用详情URL */
  digitalApplicationDetailUrl?: string
  /* 数字应用名称 */
  digitalApplicationName?: string
  /* 小图标 */
  iconUrl?: string
  /* 数字应用ID */
  id?: number
  /* 图片URL */
  picUrl?: string
  /* 标签 */
  tags?: string[]
}

type _DomainModel = {
  /* 领域模型名称 */
  dominModelName: string
  /* 领域模型ID */
  id: number
  /* 模型图片URL */
  modelPicUrl: string
}

/* 领域大模型 */
type _DomainBigModelDto = {
  /* 领域大模型描述 */
  subtitle: string
  tabModels: TabModels[]
}

type TabModels = {
  title: string
  modelDetails: {
    id: number
    dominModelName: string
    modelPicUrl: string
  }[]
}
type _NewsDto = {
  subTitle: string
  newsList: NewsList[]
}

type NewsList = {
  /* 新闻ID */
  id: number
  /* 新闻描述 */
  newsDesc: string
  /* 新闻详情 */
  newsDetail: string
  /* 新闻名称 */
  newsName: string
  /* 新闻图片URL */
  newsPicUrl: string
  /* 新闻时间 */
  newsTime: string
}
type _RotationChartDto = {
  /* 轮播图描述 */
  desc: string
  /* 轮播图详情URL */
  detailUrl: string
  /* 轮播图ID */
  id: number
  /* 轮播图名称 */
  name: string
  /* 图片URL */
  picUrl: string
}

type _SolutionMouduleDto = {
  /* 解决方案描述 */
  subTitle: string
  solutionTabs: SolutionTabs[]
}
type SolutionTabs = {
  id: number
  tabName: string
  solutionName: string
  /* 解决方案描述 */
  solutionDesc: string
  /* 解决方案图片 */
  solutionDetailUrl: string
  /* 解决方案标签， 底部的半透明文案 */
  tags: string[]
}
type _HomeDataResponse = {
  /* 合作伙伴图片 */
  cooperativeUrls: string[]
  /* 数据集群信息 */
  dataClusterDto: DataClusterDto
  /* 数字化应用 */
  digitalApplicationDomDto: DigitalApplicationDomDto
  /* 领域大模型信息 */
  domainBigModelDto: DomainBigModelDto
  /* 新闻列表 */
  newsDtoList: NewsDto
  /* 轮播图列表 */
  rotationChartDtos: RotationChartDto[]
  /* 解决方案列表 */
  solutionMouduleDto: SolutionMouduleDto
  /* 菜单配置 */
  titles: string[]
}

type DomainBigModelDto = Partial<_DomainBigModelDto>
type DomainModel = Partial<_DomainModel>
type DataClusterDto = Partial<_DataClusterDto>
type DataBaseDto = Partial<_DataBaseDto>
type DigitalApplicationDomDto = Partial<_DigitalApplicationDomDto>
type NewsDto = Partial<_NewsDto>
type RotationChartDto = Partial<_RotationChartDto>

type SolutionMouduleDto = Partial<_SolutionMouduleDto>
type HomeDataResponse = Partial<_HomeDataResponse>

export type {
  HomeDataResponse,
  DataBaseDto,
  DataClusterDto,
  DigitalApplicationDomDto,
  DomainModel,
  DomainBigModelDto,
  NewsDto,
  RotationChartDto,
  SolutionMouduleDto,
  SolutionTabs,
  DigitalApplicationDto,
}
