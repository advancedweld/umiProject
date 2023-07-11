import React from 'react'

import styles from './index.less'

interface ISectionTitle {
  mainTitle: string
  subTitle: string
}

const SectionTitle: React.FC<ISectionTitle> = ({ mainTitle, subTitle }) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.mainTitle}>{mainTitle}</div>
      <div className={styles.subTitle}>{subTitle}</div>
    </div>
  )
}

export default SectionTitle
