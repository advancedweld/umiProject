import React from 'react'
import { useFilterContext } from '../context'

import LibTabs from './LibTabs'
import styles from './style.less'

const DataClusterCard: React.FC = () => {
  const { filterState, filterOperations } = useFilterContext()
  console.log('@@@@@@@@@@@@@@数据集群=====', filterState, filterOperations)
  return (
    <div className={styles.cardWrap}>
      <div>卡片卡片卡片卡片</div>
    </div>
  )
}

const CardList: React.FC = () => {
  const { filterState, filterOperations } = useFilterContext()
  console.log('@@@@@@@@@@@@@@数据集群=====', filterState, filterOperations)
  return (
    <div className={styles.cardListWrap}>
      {new Array(10).fill(0).map((item, index) => (
        <DataClusterCard key={index} />
      ))}
    </div>
  )
}

export default CardList
