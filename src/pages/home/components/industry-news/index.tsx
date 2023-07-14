import React from 'react'
import { Button } from 'antd'
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
      <SectionTitle mainTitle='行业新闻' subTitle='了解最新最热行业资讯' />
      <div className={styles.section} style={{ marginTop: '40px' }}>
        {newsDtoList.map((item, index) => {
          return <NewsCard key={index} title={item.newsName} subTitle={item.newsDesc} imgSrc={item.newsPicUrl} />
        })}
      </div>
      <div style={{ marginTop: '24px', textAlign: 'center' }}>
        <Button>查看更多</Button>
      </div>
    </div>
  )
}

export default IndustryNews
