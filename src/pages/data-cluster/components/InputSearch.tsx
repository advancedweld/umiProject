import React from 'react'
import { Space, Input } from 'antd'
import cx from 'classnames'
import { useFilterContext } from '../context'
import { TAB_ITEMS_OBJECT } from '../service/constants'
import styles from './style.less'

const LibTabs: React.FC = () => {
  const { filterState, filterOperations } = useFilterContext()
  console.log('@@@@@@@@@@@@@@数据集群=====', filterState, filterOperations)
  const TAB_ITEMS = Object.entries(TAB_ITEMS_OBJECT)
  return (
    <div className={styles.searchWrap}>
      <div className={styles.title}>数据集群</div>
      <div>
        数据集群是中国创新设计数智平台的数据基础，包含各个领域高质量、大规模的创新设计数据集，便于构建各个行业的领域大模型以及覆盖国计民生产业的应用和服务。
      </div>
      <Input.Search placeholder='搜索数据集'></Input.Search>
    </div>
  )
}

export default LibTabs
