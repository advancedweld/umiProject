/*
 * @Author: xiangshangzhi
 * @Date: 2023-07-07 10:15:41
 * @FilePath: \umiProject\src\pages\about\components\TopBanner.tsx
 * @Description:
 */
import React, { useEffect } from 'react'
import { useQuery, useQueryClient } from 'umi'
import { Button, Space } from 'antd'
import { userProfileStore } from '@/model/userProfile'
import { getAboutUsData } from '../service/api'
import type { AboutUsResponse } from '../service/type'
import styles from './style.less'
// 使用mockData进行后续操作

type ITopBanner = {
  firstInformationDto: AboutUsResponse['firstInformationDto']
}

const LogoCard: React.FC<{ title: string; url: string }> = ({ title, url }) => {
  return (
    <div className={styles.cardWrap}>
      <img src={url} alt='' />
      <div
        style={{
          marginTop: '8px',
          color: '#fff',
          fontSize: '20px',
        }}>
        {title}
      </div>
    </div>
  )
}
const TopBanner: React.FC<ITopBanner> = ({ firstInformationDto }) => {
  console.log('🚀 ~ file: TopBanner.tsx:20 ~ firstInformationDto:', firstInformationDto)

  const userProfile = userProfileStore()
  console.log('@@@@@userProfile======', userProfile)

  return (
    <div className={styles.bannerWrap}>
      <div className={styles.textContainer}>
        <div className={styles.title}>{firstInformationDto.title}</div>
        <div className={styles.content}>{firstInformationDto.subTitle}</div>
      </div>
      <div className={styles.cardContainer}>
        <LogoCard title={'智能设计'} url={'www/baidu.com'} />
        <LogoCard title={'人机融合'} url={'www/baidu.com'} />
        <LogoCard title={'绿色设计'} url={'www/baidu.com'} />
        <LogoCard title={'未来媒体'} url={'www/baidu.com'} />
      </div>
    </div>
  )
}

export default TopBanner
