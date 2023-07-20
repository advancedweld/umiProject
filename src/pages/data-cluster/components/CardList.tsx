import React from 'react'
import { Tag, Pagination } from 'antd'
import { useQuery, useNavigate } from 'umi'
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
  const cardRef = React.useRef<HTMLDivElement>(null)
  console.log('@@@@@@@@@@@@@@数据集群filterState=====', filterState)

  const {
    data: _cardListData,
    error,
    isLoading,
    refetch,
  } = useQuery(['data-cluster/cardList'], () => {}, {
    retry: false,
    enabled: true,
    onError: (err) => {
      console.log('@@@@@err======', err)
    },
    // select: (data) => data.data,
  })

  const { pageParams } = filterState
  const onPageChange = (page: number, pageSize?: number) => {
    filterOperations.updatePageParams({ pageNum: page, pageSize: pageSize || 10 })

    /* 分页改变事件后滚动到初始位置 */
    if (cardRef.current) {
      const cardContainerTopOffset = cardRef.current?.getBoundingClientRect().top || 0
      window.scrollTo({
        top: cardContainerTopOffset,
        left: 0,
        behavior: 'smooth',
      })
    }
  }

  const cardListData = new Array(20).fill(1)
  return (
    <div className={styles.cardListWrap} ref={cardRef}>
      <div className={styles.scrollWrap}>
        {cardListData.map((item, index) => (
          <DataClusterCard key={index} title='我是一张小卡片' isHumanType={index % 2 === 0} />
        ))}
      </div>

      {/* 总数量大于40的时候显示分页 */}
      {cardListData.length > 40 && (
        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <Pagination
            current={pageParams.pageNum}
            pageSize={pageParams.pageSize}
            total={66}
            onChange={onPageChange}
            showSizeChanger={false}
          />
        </div>
      )}
    </div>
  )
}

export default CardList
