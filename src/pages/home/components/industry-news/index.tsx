import React from 'react'

import SectionTitle from '../section-title'
import styles from './index.less'
import { Button, Tabs } from 'antd'
import type { TabsProps } from 'antd'
import NewsCard from '../news-card'

interface ILargeModel {
  bannerList?: any[]
}

const IndustryNews: React.FC<ILargeModel> = ({ bannerList }) => {
  return (
    <div className={styles.wrap}>
      <SectionTitle mainTitle='行业新闻' subTitle='我们帮助企业与伙伴成功' />
      <div className={styles.section} style={{ marginTop: '40px' }}>
        <NewsCard />
      </div>
    </div>
  )
}

export default IndustryNews
