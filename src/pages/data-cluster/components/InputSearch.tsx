import React, { Children } from 'react'
import { Space, Input } from 'antd'
import cx from 'classnames'
import { useFilterContext } from '../context'
import { TAB_ITEMS_OBJECT } from '../service/constants'

import { ReactComponent as SearchIcon } from '@/assets/img/search_icon.svg'
import styles from './style.less'

const TABS_META = {
  ALL_LIB: [],
  ART_LIB: [],

  BUSINESS_LIB: [
    {
      label: '全部',
      value: 'ALL',
      children: [],
    },
    {
      label: '纽扣',
      value: 'NIUKOU',
      children: [],
    },
    {
      label: '服装',
      value: 'CLOTHES',
      children: [],
    },
  ],
  TECH_LIB: [],
  CLUTURE_LIB: [],
  DESIGN_LIB: [
    {
      label: '全部',
      value: 'ALL',
      children: [],
    },
    {
      label: '设计风格',
      value: 'designStyle',
      children: [
        {
          label: '包豪斯',
          value: 'bhs',
        },
        {
          label: '后现代',
          value: 'hxd',
        },
      ],
    },
    {
      label: '设计师',
      value: 'designer',
      children: [
        {
          label: '向尚志',
          value: 'xsz',
        },
        {
          label: '宋志勤',
          value: 'szq',
        },
      ],
    },
  ],

  HUMAN_LIB: [],
  FUSION_LIB: [],
}
const LibTabs: React.FC = () => {
  const { filterState, filterOperations } = useFilterContext()

  const [searchValue, setSearchValue] = React.useState(filterState.searchKeyWord)
  /* 当前激活的tab */
  const activeTab = filterState.libTab
  /* 当前激活的二级tab */
  const activeTab2 = filterState.secondTab
  /* 当前选项元数据 */
  const selections2 = TABS_META[activeTab] || []
  console.log('@@@@@selections2=====', selections2)

  const selections3 = selections2.find((item) => item.value === activeTab2)?.children || []

  console.log('@@@@@selections3=====', selections3)
  const handleSeacrh = () => {
    filterOperations.updateSearchKeyWord(searchValue)
  }
  const handleTab2click = (tab: string) => {
    console.log('@@@@@handleTab2click=====', tab)
    filterOperations.updateTabs2(tab)
  }
  const title = activeTab === 'ALL_LIB' ? '数据集群' : TAB_ITEMS_OBJECT[activeTab]
  return (
    <div className={styles.searchWrap}>
      <div className={styles.title}>{title}</div>
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

      {!!selections2.length && (
        <div className={styles.columnWrap} style={{ marginTop: '24px' }}>
          {selections2.map((item) => {
            return (
              <div className={styles.tab2} key={item.value} onClick={() => handleTab2click(item.value)}>
                {item.label}
              </div>
            )
          })}
        </div>
      )}

      {!!selections3.length && (
        <div className={styles.columnWrap} style={{ marginTop: '12px' }}>
          {selections3.map((item) => {
            return (
              <div className={styles.tab3} key={item.value}>
                {item.label}
              </div>
            )
          })}
        </div>
      )}

      {/* <div className={styles.columnWrap} style={{ marginTop: '12px' }}>
        <div className={styles.tab3}>包豪斯</div>
        <div className={styles.tab3}>复古风</div>
        <div className={styles.tab3}>后现代</div>
      </div> */}
    </div>
  )
}

export default LibTabs
