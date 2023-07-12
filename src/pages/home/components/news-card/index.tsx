import React from 'react'

import styles from './index.less'
import { Input, Typography } from 'antd'

interface INewsCard {
  imgSrc?: string
  title?: string
  subTitle?: string
}
const { Title } = Typography
const NewsCard: React.FC<INewsCard> = ({ title, subTitle }) => {
  return (
    <div className={styles.cardWrap}>
      <div className={styles.imgWrap}>图片</div>
      <div className={styles.textWrap}>
        <Title ellipsis={{ rows: 2 }} level={5} className={styles.title}>
          闻标新闻标题新闻标题新闻标题题闻标题新闻标题新闻标题题新闻新闻标题闻标题新闻标题新闻标题题新闻
        </Title>

        <div className={styles.info}>
          新闻内容欸容新闻温柔闻标题新闻标题新闻标题题新闻手动新闻来
        </div>
      </div>
    </div>
  )
}

export default NewsCard
