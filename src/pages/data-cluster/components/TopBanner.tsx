import React from 'react'
import { useFilterContext } from '../context'

import LibTabs from './LibTabs'
import InputSearch from './InputSearch'
import styles from './style.less'

const TopBanner: React.FC = () => {
  const { filterState, filterOperations } = useFilterContext()
  console.log('@@@@@@@@@@@@@@数据集群=====', filterState, filterOperations)
  return (
    <div className={styles.bannerWrap}>
      <LibTabs />

      <InputSearch />
    </div>
  )
}

export default TopBanner
