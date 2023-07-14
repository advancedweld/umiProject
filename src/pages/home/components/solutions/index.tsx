import React from 'react'
import { Button, Tabs } from 'antd'
import type { TabsProps } from 'antd'

import SectionTitle from '../section-title'

import type { SolutionDto } from '../../service/type'

import styles from './index.less'

interface ISolutions {
  solutionDto: SolutionDto[]
}

const items: TabsProps['items'] = [
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
  const onChange = (key: string) => {
    console.log(key)
  }
  return (
    <div className={styles.wrap}>
      <SectionTitle mainTitle='解决方案' subTitle='为行业提供精准解决方案' />
      <div className={styles.section} style={{ marginTop: '40px' }}>
        <Tabs defaultActiveKey='1' items={items} onChange={onChange} centered />
        <div className={styles.contentWrap}>
          <div className={styles.img}>
            <img src={''} />
          </div>
          <div className={styles.content}>
            <div className={styles.bgText}> ART CONSUMER GOODS</div>
            <div className={styles.title}>艺术消费品</div>
            <div className={styles.hints}>瞬间引爆，留下难忘的时尚烙印</div>
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
