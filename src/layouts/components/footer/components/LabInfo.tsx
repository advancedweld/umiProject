import { useState } from 'react'
import { Link, useLocation, useQuery } from 'umi'
import { Button, Space } from 'antd'
import { userProfileStore } from '@/model/userProfile'

import styles from './styles.less'

export default function LabInfo() {
  const location = useLocation()
  const userProfile = userProfileStore()
  return (
    <div className={styles.labWrap}>
      <div className={styles.title}>未来设计实验室</div>
      <div className={styles.info}>
        {
          '未来设计实验室聚焦新一轮科技革命与产业变革，面向未来HCPS(人类-信息-物理-场景)四元空间的创新设计战略需求，构建基于智能设计/人机融合/未来媒体/绿色设计等领域的产学研融合开放平台，打造面向未来的创新设计策源地和数据经济增长新引擎'
        }
      </div>
      <div style={{ marginTop: '32px' }}>
        <Button>联系我们</Button>
      </div>
    </div>
  )
}
