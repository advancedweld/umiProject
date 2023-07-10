import { useState } from 'react'
import { Link, useLocation, useQuery } from 'umi'
import { Space } from 'antd'
import { userProfileStore } from '@/model/userProfile'

import { NAV_ITEM } from './constant'
import styles from './index.less'

export default function Header() {
  const location = useLocation()
  const userProfile = userProfileStore()
  return (
    <div className={styles.headerWrap}>
      <Space>
        {NAV_ITEM.map((item) => {
          return (
            <Link
              key={item.path}
              className={styles.navItem}
              to={item.path}
              style={{
                color: location.pathname === item.path ? '#00b96b' : '#333',
              }}>
              {item.title}
            </Link>
          )
        })}
      </Space>
    </div>
  )
}
