/*
 * @Author: xiangshangzhi
 * @Date: 2023-07-07 10:15:41
 * @FilePath: \umiProject\src\pages\news\components\HotNews.tsx
 * @Description:
 */
import React, { useEffect } from 'react'
import { Button } from 'antd'
import { useQuery, useQueryClient } from 'umi'
import type { HotNewsResponse } from '../service/type'

import { getHotNews } from '../service/api'

import styles from './style.less'

const HotNews: React.FC = ({}) => {
  const { data, error, isLoading, refetch } = useQuery(['news/hotNews'], getHotNews, {
    retry: false,
    enabled: true,
    onError: (err) => {
      console.log('@@@@@err======', err)
    },
    select: (data) => data.data,
  })
  return (
    <div className={styles.hotNewsWrap}>
      <img className={styles.img} src={''} />
      <div className={styles.textContainer}>
        <div className={styles.title}>ChatGPT 可以帮助您写作的 21 种小技巧</div>
        <div className={styles.content}>
          当您寻找新想法时，ChatGPT
          可能是一个有用的资源。您可以使用它来创建提示、提供主题建议或为您的写作努力寻找新的视角。
        </div>
        <div className={styles.btnCol}>
          <Button>查看详情</Button>
          <span>2023-06-21</span>
        </div>
      </div>
    </div>
  )
}

export default HotNews
