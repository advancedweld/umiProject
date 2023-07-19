/*
 * @Author: xiangshangzhi
 * @Date: 2023-07-18 11:40:42
 * @FilePath: \umiProject\src\pages\data-cluster\index.tsx
 * @Description: 数据集群 ，采用usereducer+usecontext实现筛选数据管理
 */
import React from 'react'

import { useCreateFilterContext, FilterContext } from './context'

import TopBanner from './components/TopBanner'
import styles from './index.less'

const DataCluster: React.FC = () => {
  const { filterState, filterOperations } = useCreateFilterContext()

  return (
    <FilterContext.Provider value={{ filterState, filterOperations }}>
      <div className={styles.wrap}>
        <TopBanner />
      </div>
    </FilterContext.Provider>
  )
}

export default DataCluster
