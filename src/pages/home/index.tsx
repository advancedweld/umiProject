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
import LabInfo from './components/labInfo'
import type { HomeDataResponse } from './service/type'
const mockData: HomeDataResponse = {
  cooperativeUrls: [
    'https://example.com/partner1.png',
    'https://example.com/partner2.png',
    'https://example.com/partner3.png',
  ],
  dataClusterDto: {
    dataBaseDtos: [
      {
        dataBaseDesc: 'Database 1 description',
        dataBaseName: 'Database 1',
        dataBasedetailUrl: 'https://example.com/database1-details',
        id: 1,
        picUrl: 'https://example.com/database1.png',
      },
      {
        dataBaseDesc: 'Database 2 description',
        dataBaseName: 'Database 2',
        dataBasedetailUrl: 'https://example.com/database2-details',
        id: 2,
        picUrl: 'https://example.com/database2.png',
      },
    ],
    subTitle: 'Data Clusters',
    dataClusterInfoDtos: [
      {
        count: '10',
        name: 'Cluster 1',
        unit: 'units',
      },
      {
        count: '5',
        name: 'Cluster 2',
        unit: 'units',
      },
    ],
  },
  digitalApplicationDomDto: {
    subTitle: 'Digital Applications',
    digitalApplicationDtos: [
      {
        digitalApplicationDesc: 'App 1 description',
        digitalApplicationDetailUrl: 'https://example.com/app1-details',
        digitalApplicationName: 'App 1',
        iconUrl: 'https://example.com/app1-icon.png',
        id: 1,
        picUrl: 'https://example.com/app1.png',
        tags: ['Tag 1', 'Tag 2'],
      },
      {
        digitalApplicationDesc: 'App 2 description',
        digitalApplicationDetailUrl: 'https://example.com/app2-details',
        digitalApplicationName: 'App 2',
        iconUrl: 'https://example.com/app2-icon.png',
        id: 2,
        picUrl: 'https://example.com/app2.png',
        tags: ['Tag 3', 'Tag 4'],
      },
    ],
  },
  domainBigModelDto: {
    subTitle: 'Domain Big Models',
    tabModels: [
      {
        title: 'Model Category 1',
        modelDetails: [
          {
            id: 1,
            dominModelName: 'Model 1',
            modelPicUrl: 'https://example.com/model1.png',
          },
          {
            id: 2,
            dominModelName: 'Model 2',
            modelPicUrl: 'https://example.com/model2.png',
          },
        ],
      },
      {
        title: 'Model Category 2',
        modelDetails: [
          {
            id: 3,
            dominModelName: 'Model 3',
            modelPicUrl: 'https://example.com/model3.png',
          },
          {
            id: 4,
            dominModelName: 'Model 4',
            modelPicUrl: 'https://example.com/model4.png',
          },
        ],
      },
    ],
  },
  newsDtoList: {
    subTitle: 'Latest News',
    newsList: [
      {
        id: 1,
        newsName: 'News 1',
        newsDesc: 'This is news 1',
        newsDetail: 'https://example.com/news1',
        newsPicUrl: 'https://example.com/news1.png',
        newsTime: '2023-07-14',
      },
      {
        id: 2,
        newsName: 'News 2',
        newsDesc: 'This is news 2',
        newsDetail: 'https://example.com/news2',
        newsPicUrl: 'https://example.com/news2.png',
        newsTime: '2023-07-13',
      },
    ],
  },
  rotationChartDtos: [
    {
      id: 1,
      name: 'Chart 1',
      desc: 'This is chart 1',
      picUrl: 'https://example.com/chart1.png',
      detailUrl: 'https://example.com/chart1-details',
    },
    {
      id: 2,
      name: 'Chart 2',
      desc: 'This is chart 2',
      picUrl: 'https://example.com/chart2.png',
      detailUrl: 'https://example.com/chart2-details',
    },
  ],
  solutionMouduleDto: {
    subTitle: 'Solutions',
    solutionTabs: [
      {
        id: 1,
        tabName: 'Tab 1',
        solutionName: 'Solution 1',
        solutionDesc: 'This is solution 1',
        solutionDetailUrl: 'https://example.com/solution1-details',
        tags: ['Tag 1', 'Tag 2'],
      },
      {
        id: 2,
        tabName: 'Tab 2',
        solutionName: 'Solution 2',
        solutionDesc: 'This is solution 2',
        solutionDetailUrl: 'https://example.com/solution2-details',
        tags: ['Tag 3', 'Tag 4'],
      },
    ],
  },
  titles: ['Title 1', 'Title 2', 'Title 3'],
}

// 使用mockData进行后续操作

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
          <IntelligentApp digitalApplicationDomDto={mockData.digitalApplicationDomDto || {}} />
          <Solutions solutionDto={mockData.solutionMouduleDto || {}} />
          <Partner cooperativeUrls={mockData.cooperativeUrls?.[0] || ''} />
          <IndustryNews newsDtoList={mockData.newsDtoList || {}} />
          <LabInfo />
        </div>
      )}
    </>
  )
}

export default HomePage
