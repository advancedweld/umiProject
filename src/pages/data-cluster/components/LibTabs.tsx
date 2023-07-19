import React from 'react'
import { Space } from 'antd'
import cx from 'classnames'
import { useFilterContext } from '../context'
import { TAB_ITEMS_OBJECT } from '../service/constants'
import styles from './style.less'

type LibTab = keyof typeof TAB_ITEMS_OBJECT
const LibTabs: React.FC = () => {
  const { filterState, filterOperations } = useFilterContext()
  console.log('@@@@@@@@@@@@@@数据集群=====', filterState, filterOperations)
  const TAB_ITEMS = Object.entries(TAB_ITEMS_OBJECT)

  const changgeTab = (tab: LibTab) => {
    console.log('@@@@@@@@@@@@@@切换tab=====', tab)
    filterOperations.updateLibTabs(tab)
  }
  return (
    <div className={styles.libTabsWrap}>
      <Space size={12}>
        {TAB_ITEMS.map(([value, label]) => {
          return (
            <div
              className={cx(styles.tab, {
                [styles.active]: value === filterState.libTab,
              })}
              onClick={() => changgeTab(value as LibTab)}
              key={value}>
              {label}
            </div>
          )
        })}
      </Space>
    </div>
  )
}

export default LibTabs
