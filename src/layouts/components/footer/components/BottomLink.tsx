import { Link } from 'umi'
import { Divider } from 'antd'

import { LINKS } from './constant'
import styles from './styles.less'

export default function Header() {
  return (
    <div className={styles.bottomWrap}>
      <div style={{ position: 'relative' }}>
        <div className={styles.groupBox}>
          <>
            {LINKS.map((item, index) => {
              return (
                <div className={styles.group} key={item.mainTitle}>
                  <div className={styles.mainTitle}>{item.mainTitle}</div>
                  {item.subTitles.map((subItem, subIndex) => {
                    return (
                      <Link
                        // to={subItem.link}
                        to={'/data'}
                        className={styles.subTitle}
                        key={subItem.label}>
                        {subItem.label}
                      </Link>
                    )
                  })}
                </div>
              )
            })}
          </>
        </div>
        <img className={styles.logo} />
        <Divider className={styles.divider} />
        <div> 版权所有©中国创新设计大数据智能服务平台</div>
      </div>
    </div>
  )
}
