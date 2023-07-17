/*
 * @Author: xiangshangzhi
 * @Date: 2023-07-07 10:15:41
 * @FilePath: \umiProject\src\pages\about\index.tsx
 * @Description:
 */
import React, { useEffect } from 'react'
import { useQuery, useQueryClient } from 'umi'
import { Button, Space } from 'antd'
import { userProfileStore } from '@/model/userProfile'
import { getAboutUsData } from './service/api'
import type { AboutUsResponse } from './service/type'

import TopBanner from './components/TopBanner'
import styles from './index.less'

// 使用mockData进行后续操作
const mockData: AboutUsResponse = {
  firstInformationDto: {
    firstInformationIconDtos: [
      {
        title: 'Icon 1',
        url: 'https://example.com/icon1.png',
      },
      {
        title: 'Icon 2',
        url: 'https://example.com/icon2.png',
      },
    ],
    subTitle:
      '未来设计实验室聚焦新一轮科技革命与产业变革，面向 HCPS四元空间的创新设计战略需求，按照“4+1”的任务架构运行，即建设智能设计、人机融合、未来媒体、绿色设计4个研究方向，建立1个中国创新设计数智平台。',
    title: 'First Information',
  },
  secondInformationDto: {
    leaderIntroductionDetail: 'Leader Introduction Detail',
    leaderIntroductionTitle: 'Leader Introduction',
    platformIntroductionDetail: 'Platform Introduction Detail',
    platformIntroductionTitle: 'Platform Introduction',
    url: 'https://example.com',
  },
  thirdInformationDto: {
    latitude: '12.3456',
    longitude: '78.9012',
    subTitle: 'Sub Title',
    title: 'Third Information',
    url: 'https://example.com',
  },
}

const HomePage: React.FC<any> = () => {
  const { data, error, isLoading, refetch } = useQuery(['about/detail'], getAboutUsData, {
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
        <div className={styles.wrap}>
          <h1>关于我们</h1>
          <TopBanner firstInformationDto={mockData?.firstInformationDto || {}} />
        </div>
      )}
    </>
  )
}

export default HomePage
