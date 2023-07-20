import React from 'react'
import { Space } from 'antd'
import cx from 'classnames'
import { useFilterContext } from '../context'
import { TAB_ITEMS_OBJECT } from '../service/constants'
// import bgImg from '@/assets/img/bottom_logo@3x.png'
import styles from './style.less'

import all_bg from '@/assets/img/all_tabs_bg.png'
import art_bg from '@/assets/img/art_tabs_bg.png'
import busi_bg from '@/assets/img/busi_tabs_bg.png'
import tech_bg from '@/assets/img/tech_tabs_bg.png'
import culture_bg from '@/assets/img/culture_tabs_bg.png'

import human_bg from '@/assets/img/human_tabs_bg.png'
import design_bg from '@/assets/img/design_tabs_bg.png'
import fusion_bg from '@/assets/img/fusion_tabs_bg.png'

/* 一级tab背景图映射 */
const bgImageMap = {
  ALL_LIB: all_bg,
  ART_LIB: art_bg,
  BUSINESS_LIB: busi_bg,
  TECH_LIB: tech_bg,
  CLUTURE_LIB: culture_bg,
  HUMAN_LIB: human_bg,
  DESIGN_LIB: design_bg,
  FUSION_LIB: fusion_bg,
}
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
          const isActive = value === filterState.libTab
          return (
            <div
              className={cx(styles.tab, {
                [styles.active]: isActive,
                [styles.mask]: !isActive,
              })}
              style={{
                backgroundImage: isActive ? '' : `url(${bgImageMap[value as LibTab]})`,
                backgroundSize: '100% 100%',
              }}
              onClick={() => changgeTab(value as LibTab)}
              key={value}>
              <span>{label}</span>
            </div>
          )
        })}
      </Space>
    </div>
  )
}

export default LibTabs
