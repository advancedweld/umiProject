import React from 'react'
import { Tabs } from 'antd'
import type { TabsProps } from 'antd'
import SectionTitle from '../section-title'

import type { DomainBigModelDto } from '../../service/type'

import styles from './index.less'

interface ILargeModel {
  domainBigModelDto?: DomainBigModelDto
}

const items: TabsProps['items'] = [
  {
    key: 'FASHION',
    label: `时尚领域大模型`,
  },
  {
    key: 'NEW_RETAIL',
    label: `新零售领域大模型`,
  },
]
const LargeModel: React.FC<ILargeModel> = ({ domainBigModelDto }) => {
  const [activeKey, setActiveKey] = React.useState('FASHION')
  const { domainModelDesc, fashionModels, newRetailModels } =
    domainBigModelDto || {}
  const onChange = (key: string) => {
    console.log('@@@@@领域大模型====', key)
    setActiveKey(key)
  }

  const modelList = activeKey === 'FASHION' ? fashionModels : newRetailModels
  return (
    <div className={styles.wrap}>
      <SectionTitle mainTitle='领域大模型' subTitle={domainModelDesc} />
      <div className={styles.section} style={{ marginTop: '40px' }}>
        <Tabs
          defaultActiveKey='FASHION'
          items={items}
          onChange={onChange}
          centered
        />
        <div className={styles.cardWrap}>
          {modelList?.map((item) => {
            return (
              <div key={item.id} className={styles.card}>
                <div className={styles.cardTitle}>{item.dominModelName}</div>
                <div>
                  <img src={item.modelPicUrl} />
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
