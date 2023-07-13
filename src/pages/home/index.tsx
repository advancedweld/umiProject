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

const HomePage: React.FC<any> = () => {
  const { data, error, isLoading, refetch } = useQuery(
    ['homeData'],
    getHomeData,
    {
      retry: false,
      enabled: true,
      onError: (err) => {
        console.log('@@@@@err======', err)
      },
      select: (data) => data.data,
    },
  )

  const userProfile = userProfileStore()
  console.log('@@@@@userProfile======', userProfile)

  return (
    <>
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <div>
          <Banner bannerList={[1, 2, 3, 4, 5]} />
          <DataCluster bannerList={[1, 2, 3, 4, 5]} />
          <LargeModel />
          <IntelligentApp />
          <Solutions />
          <Partner />
          <IndustryNews />
        </div>
      )}
    </>
  )
}

export default HomePage
