/*
 * @Author: xiangshangzhi
 * @Date: 2023-07-07 10:15:41
 * @FilePath: \umiProject\src\pages\news\components\TopBanner.tsx
 * @Description:
 */
import React, { useEffect } from 'react'

import styles from './style.less'

const TopBanner: React.FC = ({}) => {
  return (
    <div className={styles.bannerWrap}>
      <div className={styles.textContainer}>
        <div className={styles.title}>新闻资讯</div>
        <div className={styles.content}>了解最新最热行业动态</div>
      </div>
    </div>
  )
}

export default TopBanner
