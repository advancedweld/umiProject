import React from 'react'
import { Button, Tabs } from 'antd'
import type { TabsProps } from 'antd'

import SectionTitle from '../section-title'

import type { SolutionMouduleDto, SolutionTabs } from '../../service/type'

import styles from './index.less'

interface ISolutions {
  solutionDto: SolutionMouduleDto
}

const _items: TabsProps['items'] = [
  {
    key: 'clothes',
    label: `服装行业`,
  },
  {
    key: 'arts',
    label: `艺术消费品`,
  },
  {
    key: 'button',
    label: `纽扣行业`,
  },
  {
    key: 'flash',
    label: `快闪行业`,
  },
]
const Solutions: React.FC<ISolutions> = ({ solutionDto }) => {
  console.log('@@@@@solutionDto======', solutionDto)

  const { subTitle, solutionTabs } = solutionDto

  const items =
    solutionTabs?.map((item) => {
      return {
        key: item.id.toString(),
        label: item.solutionName,
      }
    }) || []
  const [activeKey, setActiveKey] = React.useState(items[0].key)

  const currentTab = solutionTabs?.find((item) => item.id.toString() === activeKey)

  const onChange = (key: string) => {
    console.log(key)
    setActiveKey(key)
  }
  return (
    <div className={styles.wrap}>
      <SectionTitle mainTitle='解决方案' subTitle={subTitle} />
      <div className={styles.section} style={{ marginTop: '40px' }}>
        <Tabs activeKey={activeKey} items={items} onChange={onChange} centered />
        <div className={styles.contentWrap}>
          <div className={styles.img}>
            <img src={currentTab?.solutionDetailUrl} />
          </div>
          <div className={styles.content}>
            <div className={styles.bgText}>{currentTab?.tags[0]}</div>
            <div className={styles.title}>{currentTab?.solutionName}</div>
            <div className={styles.hints}>{currentTab?.solutionDesc}</div>
            {/* 解决方案暂时不开放 */}
            {/* <div style={{ position: 'absolute', bottom: '90px' }}>
              <Button>了解详情</Button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Solutions
