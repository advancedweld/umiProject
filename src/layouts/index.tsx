import { useState } from 'react'
import { Link, Outlet, useLocation, useQuery } from 'umi'
import { ConfigProvider } from 'antd'

import Header from './components/header'
import Footer from './components/footer'
import styles from './index.less'

import '@/assets/style/common.css'
export default function Layout() {
  const location = useLocation()
  console.log('🚀 ~ file: index.tsx:8 ~ Layout ~ location:', location)

  const [count, setCount] = useState(0)

  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#0958D9',
            borderRadius: 2,
          },
        }}>
        <Header />
        <div className={styles.layoutWrap}>
          <Outlet />

          <Footer />
        </div>
      </ConfigProvider>
    </>
  )
}
