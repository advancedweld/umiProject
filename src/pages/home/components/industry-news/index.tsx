import React from 'react'

import SectionTitle from '../section-title'
import NewsCard from '../news-card'
import type { NewsDto } from '../../service/type'

import styles from './index.less'

interface INews {
  newsDtoList: NewsDto[]
}

const IndustryNews: React.FC<INews> = ({ newsDtoList }) => {
  console.log('@@@@@newsDtoList======', newsDtoList)
  return (
    <div className={styles.wrap}>
      <SectionTitle mainTitle='行业新闻' />
      <div className={styles.section} style={{ marginTop: '40px' }}>
        {newsDtoList.map((item, index) => {
          return <NewsCard key={index} title={item.newsName} subTitle={item.newsDesc} imgSrc={item.newsPicUrl} />
        })}
      </div>
    </div>
  )
}

export default IndustryNews
