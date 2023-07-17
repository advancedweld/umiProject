/*
 * @Author: xiangshangzhi
 * @Date: 2023-07-07 10:15:41
 * @FilePath: \umiProject\src\pages\about\components\TopBanner.tsx
 * @Description:
 */
import React, { useEffect } from 'react'
import type { AboutUsResponse } from '../service/type'

import ailogo from '@/assets/img/ai_logo.png'
import brainlogo from '@/assets/img/brain_logo.png'
import greenlogo from '@/assets/img/greendesign_logo.png'
import medialogo from '@/assets/img/media_logo.png'

import styles from './style.less'

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

  return (
    <div className={styles.bannerWrap}>
      <div className={styles.textContainer}>
        <div className={styles.title}>{firstInformationDto.title}</div>
        <div className={styles.content}>{firstInformationDto.subTitle}</div>
      </div>
      <div className={styles.cardContainer}>
        <LogoCard title={'智能设计'} url={ailogo} />
        <LogoCard title={'人机融合'} url={brainlogo} />
        <LogoCard title={'绿色设计'} url={greenlogo} />
        <LogoCard title={'未来媒体'} url={medialogo} />
      </div>
    </div>
  )
}

export default TopBanner
