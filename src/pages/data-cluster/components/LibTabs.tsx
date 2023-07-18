import React from 'react'
import { useFilterContext } from '../context'
import styles from './style.less'

const LibTabs: React.FC = () => {
  const { filterState, filterOperations } = useFilterContext()
  console.log('@@@@@@@@@@@@@@数据集群=====', filterState, filterOperations)
  return (
    <div className={styles.libTabsWrap}>
      <h1>数据集群</h1>
    </div>
  )
}

export default LibTabs
