import React from 'react'
import { Space, Card, Button, Tag } from 'antd'
import SectionTitle from '../section-title'
import type { DigitalApplicationDto } from '../../service/type'

import styles from './index.less'

const ContentCard: React.FC<{ content: DigitalApplicationDto }> = ({ content }) => (
  <div className={styles.cardWrap}>
    <div className={styles.left}>
      <img src={content.picUrl} />
    </div>
    <div className={styles.right}>
      <div
        style={{
          color: 'rgba(0,0,0,0.85)',
          fontSize: '16px',
          fontWeight: 500,
        }}>
        {content.digitalApplicationName}
      </div>
      <Space style={{ marginTop: '12px' }}>
        {/* todo 后端需要传标签字段 */}
        <Tag color='blue'>创造力的数字助手</Tag>
      </Space>
      <div className={styles.textBox}>{content.digitalApplicationDesc}</div>
    </div>
  </div>
)

interface IIntelligentApp {
  digitalApplicationDtos: DigitalApplicationDto[]
}

const IntelligentApp: React.FC<IIntelligentApp> = ({ digitalApplicationDtos }) => {
  console.log('@@@@@digitalApplicationDtos======', digitalApplicationDtos)
  return (
    <div className={styles.wrap}>
      <SectionTitle mainTitle='数智化应用' subTitle='不同行业/垂直领域的一站式应用' />
      <div className={styles.section} style={{ marginTop: '32px' }}>
        {digitalApplicationDtos.map((item, index) => {
          return <ContentCard key={index} content={item} />
        })}
      </div>
    </div>
  )
}

export default IntelligentApp
