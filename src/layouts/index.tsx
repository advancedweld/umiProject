import { useState, useEffect } from 'react'
import { Link, Outlet, useLocation, useQuery } from 'umi'
import { ConfigProvider } from 'antd'

import Header from './components/header'
import Footer from './components/footer'
import styles from './index.less'

import '@/assets/style/common.css'
export default function Layout() {
  const location = useLocation()

  useEffect(() => {
    console.log('@@@@@@location pathname', location.pathname)
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: 'smooth',
    })
  }, [location.pathname])
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
