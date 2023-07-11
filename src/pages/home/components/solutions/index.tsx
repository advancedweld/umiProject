import React from 'react'

import SectionTitle from '../section-title'
import styles from './index.less'
import { Button, Tabs } from 'antd'
import type { TabsProps } from 'antd'

interface ILargeModel {
  bannerList?: any[]
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
const Solutions: React.FC<ILargeModel> = ({ bannerList }) => {
  const onChange = (key: string) => {
    console.log(key)
  }
  return (
    <div className={styles.wrap}>
      <SectionTitle mainTitle='解决方案' subTitle='为行业提供精准解决方案' />
      <div className={styles.section} style={{ marginTop: '40px' }}>
        <Tabs defaultActiveKey='1' items={items} onChange={onChange} centered />
        <div className={styles.contentWrap}>
          <div className={styles.img}></div>
          <div className={styles.content}>
            <div
              style={{
                fontFamily: 'PingFang SC',
                fontSize: '30px',
                fontWeight: 600,
              }}>
              艺术消费品
            </div>
            <div
              style={{
                fontFamily: 'PingFang SC',
                fontSize: '16px',
                fontWeight: 400,
                marginTop: '16px',
              }}>
              瞬间引爆，留下难忘的时尚烙印
            </div>
            <div style={{ position: 'absolute', bottom: '90px' }}>
              <Button>了解详情</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Solutions
