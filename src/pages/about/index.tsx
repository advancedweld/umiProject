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
import MidBlock from './components/MidBlock'
import LocationBlock from './components/LocationBlock'
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
    leaderIntroductionDetail:
      '未来设计实验室主任为孙守迁教授，副主任为柴春雷教授、黄琦副教授，主任助理为徐雯洁副教授、邹宁副教授。',
    leaderIntroductionTitle: '实验室负责人',
    platformIntroductionDetail:
      '中国创新设计数智平台致力于打造最具影响力的智能创新设计平台。平台基于中国创新设计知识服务系统建立大数据集群，构建各行业的领域大模型，形成多模态、跨行业的数智化基础设施，推动AIGC在各大垂直领域的应用与落地，释放人工智能的生产力价值以及数据的商业应用价值，推动产业链和区域经济实现可持续绿色发展。',
    platformIntroductionTitle: '中国创新设计数智平台',
    url: 'https://example.com',
  },
  thirdInformationDto: {
    latitude: '12.3456',
    longitude: '78.9012',
    subTitle: 'Sub Title',
    title: '联系我们',
    url: '浙江省嘉兴市嘉善县西塘镇中兴路828号8幢（祥符荡科创绿谷）',
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
          <TopBanner firstInformationDto={mockData?.firstInformationDto || {}} />
          <MidBlock secondInformationDto={mockData?.secondInformationDto || {}} />
          <LocationBlock thirdInformationDto={mockData?.thirdInformationDto || {}} />
        </div>
      )}
    </>
  )
}

export default HomePage
