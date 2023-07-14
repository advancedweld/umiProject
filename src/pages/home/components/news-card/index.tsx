import React from 'react'

import styles from './index.less'
import { Input, Typography } from 'antd'

interface INewsCard {
  imgSrc?: string
  title?: string
  subTitle?: string
}
const { Title } = Typography
const NewsCard: React.FC<INewsCard> = ({ title, subTitle, imgSrc }) => {
  return (
    <div className={styles.cardWrap}>
      <div className={styles.imgWrap}>
        <img src={imgSrc} />
      </div>
      <div className={styles.textWrap}>
        <Title ellipsis={{ rows: 2 }} level={5} className={styles.title}>
          {title}
        </Title>

        <div className={styles.info}>{subTitle}</div>
      </div>
    </div>
  )
}

export default NewsCard
