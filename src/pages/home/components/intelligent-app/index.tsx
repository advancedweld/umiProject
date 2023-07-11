import React from 'react'

import SectionTitle from '../section-title'
import styles from './index.less'
import { Space, Card, Button, Tag } from 'antd'

const ContentCard: React.FC = () => (
  <div className={styles.cardWrap}>
    <div className={styles.left}>图片区域</div>
    <div className={styles.right}>
      <div
        style={{
          color: 'rgba(0,0,0,0.85)',
          fontSize: '16px',
          fontWeight: 500,
        }}>
        2D文生图
      </div>
      <Space style={{ marginTop: '12px' }}>
        <Tag color='blue'>创造力的数字助手</Tag>
      </Space>
      <div className={styles.textBox}>
        智能生成是数智化应用领域的一项关键技术，它利用领域大模型和自然语言处理技术，能够生成各种类型
      </div>
    </div>
  </div>
)

interface IIntelligentApp {
  bannerList?: any[]
}

const IntelligentApp: React.FC<IIntelligentApp> = ({ bannerList }) => {
  console.log('@@@@@bannerList======', bannerList)
  return (
    <div className={styles.wrap}>
      <SectionTitle
        mainTitle='数智化应用'
        subTitle='不同行业/垂直领域的一站式应用'
      />
      <div className={styles.section} style={{ marginTop: '32px' }}>
        {[1, 2, 3, 4, 5, 6].map((item, index) => {
          return <ContentCard key={index} />
        })}
      </div>
    </div>
  )
}

export default IntelligentApp
