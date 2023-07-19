import React from 'react'
import { Space, Input } from 'antd'
import cx from 'classnames'
import { useFilterContext } from '../context'
import { TAB_ITEMS_OBJECT } from '../service/constants'

import { ReactComponent as SearchIcon } from '@/assets/img/search_icon.svg'
import styles from './style.less'

const LibTabs: React.FC = () => {
  const { filterState, filterOperations } = useFilterContext()

  const [searchValue, setSearchValue] = React.useState(filterState.searchKeyWord)
  const activeTab = filterState.libTab

  const handleSeacrh = () => {
    filterOperations.updateSearchKeyWord(searchValue)
  }
  return (
    <div className={styles.searchWrap}>
      <div className={styles.title}>数据集群</div>
      <div className={styles.desc}>
        数据集群是中国创新设计数智平台的数据基础，包含各个领域高质量、大规模的创新设计数据集，便于构建各个行业的领域大模型以及覆盖国计民生产业的应用和服务。
      </div>
      <Input
        size='large'
        placeholder='搜索数据集'
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onPressEnter={handleSeacrh}
        // allowClear
        className={styles.searchInput}
        suffix={<SearchIcon style={{ cursor: 'pointer' }} onClick={handleSeacrh} />}></Input>
    </div>
  )
}

export default LibTabs
