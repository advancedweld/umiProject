import React from 'react'

import SectionTitle from '../section-title'
import partner from '@/assets/img/partner.png'
import styles from './index.less'

interface ILargeModel {
  bannerList?: any[]
}

const Partner: React.FC<ILargeModel> = ({ bannerList }) => {
  const onChange = (key: string) => {
    console.log(key)
  }
  return (
    <div className={styles.wrap}>
      <SectionTitle mainTitle='合作伙伴' subTitle='我们帮助企业与伙伴成功' />
      <div className={styles.section} style={{ marginTop: '40px' }}>
        <img className={styles.imgWrap} src={partner} />
      </div>
    </div>
  )
}

export default Partner
