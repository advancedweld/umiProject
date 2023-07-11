import React from 'react'

import SectionTitle from '../section-title'
import styles from './index.less'
import { Space, Card, Button } from 'antd'

const ContentCard: React.FC = () => (
  <div className={styles.cardWrap}>
    <div
      style={{ color: 'rgba(0,0,0,0.85)', fontSize: '16px', fontWeight: 500 }}>
      商业构成库
    </div>
    <div
      style={{
        color: 'rgba(0,0,0,0.45)',
        fontSize: '14px',
        fontWeight: 400,
        marginTop: '8px',
      }}>
      精选优秀数据
    </div>
    <Button type='link'>查看详情</Button>
  </div>
)

interface IDataCluster {
  bannerList: any[]
}

const DataCluster: React.FC<IDataCluster> = ({ bannerList }) => {
  console.log('@@@@@bannerList======', bannerList)
  return (
    <div className={styles.wrap}>
      <SectionTitle mainTitle='数据集群' subTitle='DATA CLUSTER' />
      <div className={styles.section} style={{ marginTop: '40px' }}>
        {[1, 2, 3, 4, 5, 6, 7].map((item, index) => {
          return (
            <div key={index} className={styles.subTitle}>
              <div>
                <span className={styles.number}>20</span>
                <span className={styles.unit}>个</span>
              </div>
              <div className={styles.hints}>核心数据库</div>
            </div>
          )
        })}
      </div>
      <div className={styles.section} style={{ marginTop: '32px' }}>
        {[1, 2, 3, 4, 5, 6, 7].map((item, index) => {
          return <ContentCard key={index} />
        })}
      </div>
    </div>
  )
}

export default DataCluster
