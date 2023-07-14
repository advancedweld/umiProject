/*
 * @Author: xiangshangzhi
 * @Date: 2023-07-07 10:15:41
 * @FilePath: \umiProject\src\pages\home\index.tsx
 * @Description:
 */
import React, { useEffect } from 'react'
import { useQuery, useQueryClient } from 'umi'
import { Button, Space } from 'antd'
import { userProfileStore } from '@/model/userProfile'
import { getHomeData } from './service/api'
import Banner from './components/banner'
import DataCluster from './components/data-cluster'
import LargeModel from './components/large-model'
import IntelligentApp from './components/intelligent-app'
import Solutions from './components/solutions'
import Partner from './components/partner'
import IndustryNews from './components/industry-news'

import type { HomeDataResponse } from './service/type'
const mockData: HomeDataResponse = {
  cooperativeUrls: ['http://example.com/coop1', 'http://example.com/coop2'],
  dataClusterDto: {
    coreDatabaseCount: 3,
    dataBaseDtos: [
      {
        dataBaseDesc: '数据库1描述',
        dataBaseName: '数据库1',
        dataBasedetailUrl: 'http://example.com/db1',
        id: 1,
        picUrl: 'http://example.com/db1.jpg',
      },
      {
        dataBaseDesc: '数据库2描述',
        dataBaseName: '数据库2',
        dataBasedetailUrl: 'http://example.com/db2',
        id: 2,
        picUrl: 'http://example.com/db2.jpg',
      },
    ],
    dataVolume: 100,
    industryAdaptationCount: 5,
    transactionLevel: '高级',
    urbanCoverage: 80,
  },
  digitalApplicationDtos: [
    {
      digitalApplicationDesc: '数字应用1描述',
      digitalApplicationDetailUrl: 'http://example.com/app1',
      digitalApplicationName: '数字应用1',
      id: 1,
      picUrl: 'http://example.com/app1.jpg',
    },
    {
      digitalApplicationDesc: '数字应用2描述',
      digitalApplicationDetailUrl: 'http://example.com/app2',
      digitalApplicationName: '数字应用2',
      id: 2,
      picUrl: 'http://example.com/app2.jpg',
    },
  ],
  domainBigModelDto: {
    domainModelDesc: '领域大模型描述',
    fashionModels: [
      {
        dominModelName: '时尚模型1',
        id: 1,
        modelPicUrl: 'http://example.com/fashion1.jpg',
      },
      {
        dominModelName: '时尚模型2',
        id: 2,
        modelPicUrl: 'http://example.com/fashion2.jpg',
      },
    ],
    newRetailModels: [
      {
        dominModelName: '新零售模型1',
        id: 1,
        modelPicUrl: 'http://example.com/retail1.jpg',
      },
      {
        dominModelName: '新零售模型2',
        id: 2,
        modelPicUrl: 'http://example.com/retail2.jpg',
      },
    ],
  },
  newsDtoList: [
    {
      id: 1,
      newsDesc: '新闻1描述',
      newsDetail: '新闻1详情',
      newsName: '新闻1',
      newsPicUrl: 'http://example.com/news1.jpg',
      newsTime: '2023-07-13',
    },
    {
      id: 2,
      newsDesc: '新闻2描述',
      newsDetail: '新闻2详情',
      newsName: '新闻2',
      newsPicUrl: 'http://example.com/news2.jpg',
      newsTime: '2023-07-14',
    },
  ],
  rotationChartDtos: [
    {
      desc: '轮播图1描述',
      detailUrl: 'http://example.com/rotation1',
      id: 1,
      name: '轮播图1',
      picUrl: 'http://example.com/rotation1.jpg',
    },
    {
      desc: '轮播图2描述',
      detailUrl: 'http://example.com/rotation2',
      id: 2,
      name: '轮播图2',
      picUrl: 'http://example.com/rotation2.jpg',
    },
  ],
  solutionDtos: [
    {
      id: 1,
      solutionDesc: '解决方案1描述',
      solutionName: '解决方案1',
      solutionPicUrl: 'http://example.com/solution1.jpg',
    },
    {
      id: 2,
      solutionDesc: '解决方案2描述',
      solutionName: '解决方案2',
      solutionPicUrl: 'http://example.com/solution2.jpg',
    },
  ],
  titles: ['标题1', '标题2', '标题3'],
}

const HomePage: React.FC<any> = () => {
  const { data, error, isLoading, refetch } = useQuery(['homeData'], getHomeData, {
    retry: false,
    enabled: true,
    onError: (err) => {
      console.log('@@@@@err======', err)
    },
    select: (data) => data.data,
  })

  const userProfile = userProfileStore()
  console.log('@@@@@userProfile======', userProfile)

  return (
    <>
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <div>
          <Banner rotationChartDtos={mockData.rotationChartDtos || []} />
          <DataCluster dataClusterDto={mockData.dataClusterDto || {}} />
          <LargeModel domainBigModelDto={mockData.domainBigModelDto} />
          <IntelligentApp digitalApplicationDtos={mockData.digitalApplicationDtos || []} />
          <Solutions solutionDto={mockData.solutionDtos || []} />
          <Partner cooperativeUrls={mockData.cooperativeUrls?.[0] || ''} />
          <IndustryNews newsDtoList={mockData.newsDtoList || []} />
        </div>
      )}
    </>
  )
}

export default HomePage
