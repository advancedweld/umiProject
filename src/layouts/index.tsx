import { useState } from 'react'
import { Link, Outlet, useLocation, useQuery } from 'umi'
import { ConfigProvider } from 'antd'

import Header from './components/header'
import styles from './index.less'

import '@/assets/style/common.css'
export default function Layout() {
  const location = useLocation()
  console.log('🚀 ~ file: index.tsx:8 ~ Layout ~ location:', location)

  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className={styles.layoutWrap}>
        <div>{`location is ${location.pathname}`}</div>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#00b96b',
            },
          }}>
          <Outlet />
        </ConfigProvider>
      </div>
    </>
  )
}
