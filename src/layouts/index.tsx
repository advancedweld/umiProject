import { Link, Outlet, useLocation, useQuery } from 'umi'
import { useState } from 'react'
import { Button } from 'antd'
import styles from './index.less'

export default function Layout() {
  const location = useLocation()
  console.log('🚀 ~ file: index.tsx:8 ~ Layout ~ location:', location)

  const [count, setCount] = useState(0)

  return (
    <div className={styles.navs}>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/docs'>Docs</Link>
        </li>
        <li>
          <Link to='/home'>home</Link>
        </li>
        <li>
          <a href='https://github.com/umijs/umi'>Github</a>
        </li>
      </ul>
      <div>{`location is ${location.pathname}`}</div>
      <Outlet />
    </div>
  )
}
