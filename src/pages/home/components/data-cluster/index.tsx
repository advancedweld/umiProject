import React from 'react'

import SectionTitle from '../section-title'
import styles from './index.less'
import { Space, Card } from 'antd'

const ContentCard: React.FC = () => (
  <Card style={{ width: 300 }}>
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </Card>
)

interface IDataCluster {
  bannerList: any[]
}

const DataCluster: React.FC<IDataCluster> = ({ bannerList }) => {
  console.log('@@@@@bannerList======', bannerList)
  return (
    <div className={styles.wrap}>
      <SectionTitle mainTitle='数据集群' subTitle='DATA CLUSTER' />
      <div className={styles.infoColumn}>
        {[1, 2, 3, 4].map((item, index) => {
          return <ContentCard key={index} />
        })}
      </div>
    </div>
  )
}

export default DataCluster
