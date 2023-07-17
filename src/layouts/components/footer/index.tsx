import { useState } from 'react'
import { Link, useLocation, useQuery } from 'umi'
import { Space } from 'antd'
import { userProfileStore } from '@/model/userProfile'

import BottomLink from './components/BottomLink'
import LogoBlock from './components/LogoBlock'
import styles from './index.less'

export default function Header() {
  const location = useLocation()
  const userProfile = userProfileStore()
  return (
    <div className={styles.footerWrap}>
      <LogoBlock />
      <BottomLink />
    </div>
  )
}
