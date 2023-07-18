/*
 * @Author: xiangshangzhi
 * @Date: 2023-07-07 10:15:41
 * @FilePath: \umiProject\src\pages\news\index.tsx
 * @Description:
 */
import React, { useEffect } from 'react'

import TopBanner from './components/TopBanner'
import HotNews from './components/HotNews'
import NewsCardList from './components/NewsCardList'

import styles from './index.less'

// 使用mockData进行后续操作

const NewsPage = () => {
  return (
    <>
      <div className={styles.wrap}>
        <TopBanner />
        <HotNews />
        <NewsCardList />
      </div>
    </>
  )
}

export default NewsPage
