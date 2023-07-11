import React from 'react'

import SectionTitle from '../section-title'
import styles from './index.less'
import { Button, Tabs } from 'antd'
import type { TabsProps } from 'antd'

interface ILargeModel {
  bannerList?: any[]
}

const Partner: React.FC<ILargeModel> = ({ bannerList }) => {
  const onChange = (key: string) => {
    console.log(key)
  }
  return (
    <div className={styles.wrap}>
      <SectionTitle mainTitle='合作伙伴' subTitle='我们帮助企业与伙伴成功' />
      <div className={styles.section} style={{ marginTop: '40px' }}>
        <div className={styles.imgWrap}>图片图片图片</div>
      </div>
    </div>
  )
}

export default Partner
