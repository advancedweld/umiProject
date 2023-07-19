/*
 * @Author: xiangshangzhi
 * @Date: 2023-07-07 10:15:41
 * @FilePath: \umiProject\src\pages\news\components\NewsCardList.tsx
 * @Description:
 */
import React, { useEffect, useState } from 'react'
import { Input, Typography, Pagination } from 'antd'
import { useQuery, useQueryClient, useNavigate } from 'umi'
import type { NewsListResponse } from '../service/type'
import { fetchNewsList } from '../service/api'

import styles from './style.less'

interface INewsCard {
  imgSrc?: string
  title?: string
  dateTime?: string
}
const { Title } = Typography
const NewsCard: React.FC<INewsCard> = ({ title, dateTime, imgSrc }) => {
  const nav = useNavigate()
  const handleClick = () => {
    /* 跳转传新闻id */
    nav('/news-detail/77337373')
  }
  return (
    <div className={styles.cardWrap}>
      <div className={styles.imgWrap}>
        <img src={imgSrc} />
      </div>
      <div className={styles.textWrap}>
        <Title
          ellipsis={{ rows: 2 }}
          level={5}
          className={styles.title}
          onClick={handleClick}
          style={{ cursor: 'pointer' }}>
          {title}
        </Title>

        <div className={styles.dateTime}>{dateTime}</div>
      </div>
    </div>
  )
}

const NewsCardList: React.FC = ({}) => {
  const [pageObj, setPageObj] = useState({ pageNum: 1, pageSize: 10 })
  const { data, error, isLoading, refetch } = useQuery(
    ['news/newsCardList', { pageObj }],
    () => fetchNewsList(pageObj.pageNum, pageObj.pageSize),
    {
      retry: false,
      enabled: true,
      onError: (err) => {
        console.log('@@@@@err======', err)
      },
      select: (data) => data.data,
      keepPreviousData: true,
    },
  )

  const onPageChange = (page: number, pageSize?: number) => {
    console.log('@@@@@page======', page)
    setPageObj({ pageNum: page, pageSize: pageSize || 10 })
  }
  return (
    <div style={{ paddingBottom: '72px' }}>
      <div className={styles.cardListWrap}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => {
          return (
            <NewsCard
              title='虚拟小镇 Smallville 中的 AI NPC 生活：斯坦福...'
              // subTitle='子标题'
              imgSrc='www.baidu.com'
              dateTime='2023-06-21'
              key={item}
            />
          )
        })}
      </div>
      <div style={{ textAlign: 'center' }}>
        <Pagination
          current={pageObj.pageNum}
          pageSize={pageObj.pageSize}
          total={data?.count || 666}
          onChange={onPageChange}
          showSizeChanger={false}
        />
      </div>
    </div>
  )
}

export default NewsCardList
