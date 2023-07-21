/*
 * @Author: xiangshangzhi
 * @Date: 2023-07-07 10:15:41
 * @FilePath: \umiProject\src\pages\intelligent-app\components\TopBanner.tsx
 * @Description:
 */
import React, { useEffect } from 'react'
import lbBG from '@/assets/img/lab_bg.png'

import styles from './style.less'

const TopBanner: React.FC = ({}) => {
  return (
    <div className={styles.bannerWrap} style={{ backgroundImage: `url(${lbBG})` }}>
      <div className={styles.textContainer}>
        <div className={styles.title}>数智化应用</div>
        <div className={styles.content}>解放人类创造力，颠覆传统产品设计流程，不同行业、垂直领域的一站式应用</div>
      </div>
    </div>
  )
}

export default TopBanner
