import React from 'react'

import SectionTitle from '../section-title'
import styles from './index.less'
import { Tabs } from 'antd'
import type { TabsProps } from 'antd'

interface ILargeModel {
  bannerList?: any[]
}

const items: TabsProps['items'] = [
  {
    key: '1',
    label: `Tab 1`,
  },
  {
    key: '2',
    label: `Tab 2`,
  },
]
const LargeModel: React.FC<ILargeModel> = ({ bannerList }) => {
  console.log('@@@@@bannerList======', bannerList)

  const onChange = (key: string) => {
    console.log(key)
  }
  return (
    <div className={styles.wrap}>
      <SectionTitle
        mainTitle='领域大模型'
        subTitle='多模态/跨行业的设计领域大模型'
      />
      <div className={styles.section} style={{ marginTop: '40px' }}>
        <Tabs defaultActiveKey='1' items={items} onChange={onChange} centered />
        <div className={styles.cardWrap}>
          {[1, 2, 3, 4].map((item, index) => {
            return (
              <div key={index} className={styles.card}>
                <div className={styles.cardTitle}>纽扣设计大模型</div>
                <div>
                  图片
                  <img />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default LargeModel
