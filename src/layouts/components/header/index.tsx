import { useState } from 'react'
import { Link, useLocation } from 'umi'
import { Space } from 'antd'
import cx from 'classnames'
import { userProfileStore } from '@/model/userProfile'

import header_logo from '@/assets/img/header_logo.png'
import { NAV_ITEMS } from './constant'
import styles from './index.less'

export default function Header() {
  const location = useLocation()
  console.log('@@@@@@@@@@@@@@location=====', location)
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
              className={cx(styles.navItem, { [styles.active]: location.pathname === item.path })}
              to={item.path}>
              {item.title}
            </Link>
          )
        })}
      </Space>
    </div>
  )
}
