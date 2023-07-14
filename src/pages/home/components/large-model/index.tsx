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
  const { subTitle, tabModels } = domainBigModelDto || {}

  const items =
    tabModels?.map((item) => {
      return {
        key: item.title,
        label: item.title,
      }
    }) || []
  const [activeKey, setActiveKey] = React.useState(items[0].key)
  const currentTab = tabModels?.find((item) => item.title.toString() === activeKey)
  const onChange = (key: string) => {
    console.log('@@@@@领域大模型====', key)
    setActiveKey(key)
  }
  console.log('@@@@@领域大模型====', currentTab)
  return (
    <div className={styles.wrap}>
      <SectionTitle mainTitle='领域大模型' subTitle={subTitle} />
      <div className={styles.section} style={{ marginTop: '40px' }}>
        <Tabs defaultActiveKey='FASHION' items={items} onChange={onChange} centered />
        <div className={styles.cardWrap}>
          {currentTab?.modelDetails?.map((item) => {
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
