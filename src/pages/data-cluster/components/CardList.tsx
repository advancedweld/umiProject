import React from 'react'
import { Tag } from 'antd'
import cx from 'classnames'
import { ReactComponent as DownloadIcon } from '@/assets/img/download_arrow_icon.svg'
import { useFilterContext } from '../context'
import { ReactComponent as ViewIcon } from '@/assets/img/view_icon.svg'
import styles from './style.less'

interface ICardProps {
  title: string
  /* 是否是人本构成库 */
  isHumanType?: boolean
}
const DataClusterCard: React.FC<ICardProps> = ({ title, isHumanType }) => {
  return (
    <div className={styles.cardWrap}>
      <div className={cx(styles.imgContainer, { [styles.mask]: isHumanType })}>
        <img src='www.google.com' />
        {!!isHumanType && (
          <div className={styles.downloadIcon}>
            <DownloadIcon />
          </div>
        )}
      </div>

      <div className={styles.title}>{title}</div>
      <div className={styles.desc}>
        <div className={styles.tagContainer}>
          <Tag>宫廷风</Tag>
          <Tag>人体生理信号</Tag>
          <Tag>宫廷风</Tag>
        </div>

        <div className={styles.viewCount}>
          <ViewIcon style={{ marginRight: '4px' }} />
          <span>66</span>
        </div>
      </div>
    </div>
  )
}
interface ICardListProps {
  cardList: any[]
}
const CardList: React.FC = () => {
  const { filterState, filterOperations } = useFilterContext()
  console.log('@@@@@@@@@@@@@@数据集群=====', filterState, filterOperations)
  return (
    <div className={styles.cardListWrap}>
      <div className={styles.scrollWrap}>
        {new Array(10).fill(0).map((item, index) => (
          <DataClusterCard key={index} title='我是一张小卡片' isHumanType={index % 2 === 0} />
        ))}
      </div>
    </div>
  )
}

export default CardList
