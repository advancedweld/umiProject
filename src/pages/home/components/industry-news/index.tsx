import React from 'react'

import SectionTitle from '../section-title'
import styles from './index.less'
import NewsCard from '../news-card'

interface ILargeModel {
  bannerList?: any[]
}

const IndustryNews: React.FC<ILargeModel> = ({ bannerList }) => {
  return (
    <div className={styles.wrap}>
      <SectionTitle mainTitle='行业新闻' />
      <div className={styles.section} style={{ marginTop: '40px' }}>
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </div>
  )
}

export default IndustryNews
