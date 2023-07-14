import React from 'react'

import SectionTitle from '../section-title'
import partner from '@/assets/img/partner.png'
import styles from './index.less'

interface ILargeModel {
  cooperativeUrls: string
}

const Partner: React.FC<ILargeModel> = ({ cooperativeUrls }) => {
  return (
    <div className={styles.wrap}>
      <SectionTitle mainTitle='合作伙伴' subTitle='我们帮助企业与伙伴成功' />
      <div className={styles.section} style={{ marginTop: '40px' }}>
        {/* <img className={styles.imgWrap} src={partner} /> */}
        <img className={styles.imgWrap} src={cooperativeUrls} />
      </div>
    </div>
  )
}

export default Partner
