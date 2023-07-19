/*
 * @Author: xiangshangzhi
 * @Date: 2023-07-07 10:15:41
 * @FilePath: \umiProject\src\pages\news-detail\index.tsx
 * @Description:
 */
import React, { useEffect } from 'react'
import { useNavigate, useParams, useQuery, Link } from 'umi'
import { getNewsDetail } from './service/api'

import styles from './index.less'
import { Divider, Space } from 'antd'

const NewsDetail = () => {
  const { newsId } = useParams<{ newsId: string }>()
  console.log('@@@@@params======', newsId)

  const LinkItems = [
    {
      label: '首页',
      value: '/home',
    },
    {
      label: '新闻动态',
      value: '/news',
    },
    {
      label: '新闻详情',
      value: `/news-detail/${newsId}`,
    },
  ]

  const { data, error, isLoading, refetch } = useQuery(
    ['news/newsDetail', newsId],
    () => getNewsDetail(newsId as string),
    {
      retry: false,
      enabled: !!newsId,
      onError: (err) => {
        console.log('@@@@@err======', err)
      },
      select: (data) => data.data,
      keepPreviousData: true,
    },
  )

  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.linkColumn}>
          <Space>
            {LinkItems.map((item) => {
              return (
                <Link to={item.value} key={item.value}>
                  {item.label}
                </Link>
              )
            })}
          </Space>
        </div>

        <div className={styles.contentWrap}>
          <div className={styles.title}>原力黑科技：全新重光照4D扫描技术重磅登场</div>
          <div className={styles.info}>发布日期 2023-06-08</div>

          <div className={styles.content}>
            <p>
              熟悉原力黑科技的朋友们应该知道早在2019年原力已经自主研发出重光照扫描系统。能够以超高的帧速率采集高精度面部动态几何模型并生成Normal贴图、Specular贴图、Diffuse贴图、Specular贴图、Diffuse贴图。能够捕捉演员表演时细微的表情、肌肉和褶皱、血管显现等真实的物理变化，让模型扫描能够得到直接可用的高质量素材，大大降低了相关制作难度和复杂度，极大地缓解了国内行业，精英人才匮乏和制作成本过高的难题
            </p>
            <p>
              熟悉原力黑科技的朋友们应该知道早在2019年原力已经自主研发出重光照扫描系统。能够以超高的帧速率采集高精度面部动态几何模型并生成Normal贴图、Specular贴图、Diffuse贴图、Specular贴图、Diffuse贴图。能够捕捉演员表演时细微的表情、肌肉和褶皱、血管显现等真实的物理变化，让模型扫描能够得到直接可用的高质量素材，大大降低了相关制作难度和复杂度，极大地缓解了国内行业，精英人才匮乏和制作成本过高的难题
            </p>
          </div>
          <Divider />
          <div className={styles.hints}>
            <span>上一篇</span>
            <span>下一篇</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewsDetail
