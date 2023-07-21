/*
 * @Author: xiangshangzhi
 * @Date: 2023-07-07 10:15:41
 * @FilePath: \umiProject\src\pages\intelligent-app\components\Content.tsx
 * @Description:
 */
import React, { useEffect } from 'react'
import { Button, Tag } from 'antd'
import cx from 'classnames'
import { useQuery, useNavigate } from 'umi'

import { getHotNews } from '../service/api'

import styles from './style.less'

const HotNews: React.FC = ({}) => {
  const {
    data: newsDetail,
    error,
    isLoading,
    refetch,
  } = useQuery(['news/hotNews'], getHotNews, {
    retry: false,
    enabled: true,
    onError: (err) => {
      console.log('@@@@@err======', err)
    },
    select: (data) => data.data,
  })

  const nav = useNavigate()
  return (
    <div style={{ padding: '40px 144px 72px 144px' }}>
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <div className={styles.cardWrap}>
          <div className={styles.leftContainer}>
            <div className={cx(styles.tabs)}>2D图生图</div>
            <div className={cx(styles.tabs, { [styles.active]: true })}>人物说话</div>
          </div>
          <div className={styles.rightContainer}>
            <div className={styles.textContainer}>
              <div className={styles.title}>2D图生图</div>
              <div className={styles.tags}>
                <Tag color='blue'>服装</Tag>
                <Tag color='blue'>时尚</Tag>
              </div>
              <div className={styles.desc}>根据输入的参考图片，智能生成与之相关的更丰富、更精美的设计图</div>
            </div>
            <div className={styles.imgContainer}>
              <img src={'wwww.baidu.com'} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default HotNews
