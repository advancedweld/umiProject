/*
 * @Author: xiangshangzhi
 * @Date: 2023-07-07 10:15:41
 * @FilePath: \umiProject\src\pages\intelligent-app\index.tsx
 * @Description:
 */
import React, { useEffect } from 'react'

import TopBanner from './components/TopBanner'
import Content from './components/Content'

import styles from './index.less'

// 使用mockData进行后续操作

const IntelligentApp = () => {
  return (
    <div className={styles.wrap}>
      <TopBanner />
      <Content />
    </div>
  )
}

export default IntelligentApp
