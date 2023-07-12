import { useState } from 'react'
import { Link, useLocation } from 'umi'
import { Space } from 'antd'
import { userProfileStore } from '@/model/userProfile'

import header_logo from '@/assets/img/header_logo.png'
import { NAV_ITEMS } from './constant'
import styles from './index.less'

export default function Header() {
  const location = useLocation()
  const userProfile = userProfileStore()
  return (
    <div className={styles.headerWrap}>
      <Space size={40}>
        <div className={styles.title}>
          <img src={header_logo} />
        </div>

        {NAV_ITEMS.map((item) => {
          return (
            <Link
              key={item.path}
              className={styles.navItem}
              to={item.path}
              style={
                {
                  // color: location.pathname === item.path ? '#00b96b' : '#333',
                }
              }>
              {item.title}
            </Link>
          )
        })}
      </Space>
    </div>
  )
}
