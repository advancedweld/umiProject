import React from 'react'
import { Link } from 'umi'
import SectionTitle from '../section-title'
import type { DataClusterDto, DataBaseDto } from '../../service/type'
import styles from './index.less'

import icon1 from '@/assets/img/data_cluster_icon1.png'

const ContentCard: React.FC<{ dataBaseDto: DataBaseDto }> = ({
  dataBaseDto,
}) => {
  const { dataBaseDesc, dataBaseName, dataBasedetailUrl, id, picUrl } =
    dataBaseDto

  return (
    <div className={styles.cardWrap}>
      <div
        style={{
          color: 'rgba(0,0,0,0.85)',
          fontSize: '16px',
          fontWeight: 500,
        }}>
        {dataBaseName}
      </div>
      <div
        style={{
          color: 'rgba(0,0,0,0.45)',
          fontSize: '14px',
          fontWeight: 400,
          marginTop: '8px',
        }}>
        {dataBaseDesc}
      </div>
      <Link to={dataBasedetailUrl || ''} className={styles.link}>
        查看详情<span style={{ marginLeft: '8px' }}>{'>'}</span>
      </Link>
      <img src={icon1} />
    </div>
  )
}

const TitleBlock: React.FC<{
  number?: number | string
  unit?: string
  title: string
}> = ({ number, unit, title }) => {
  return (
    <div className={styles.subTitle}>
      <div>
        <span className={styles.number}>{number ?? '-'}</span>
        {unit && <span className={styles.unit}>{unit}</span>}
      </div>
      <div className={styles.hints}>{title}</div>
    </div>
  )
}
interface IDataCluster {
  dataClusterDto: DataClusterDto
}

const DataCluster: React.FC<IDataCluster> = ({ dataClusterDto }) => {
  console.log('@@@@@dataClusterDto======', dataClusterDto)
  const {
    coreDatabaseCount,
    dataVolume,
    industryAdaptationCount,
    transactionLevel,
    urbanCoverage,
    /* 数据库列表 */
    dataBaseDtos,
  } = dataClusterDto
  return (
    <div className={styles.wrap}>
      <SectionTitle mainTitle='数据集群' subTitle='DATA CLUSTER' />
      <div
        className={styles.section}
        style={{
          marginTop: '40px',
          paddingLeft: '80px',
          paddingRight: '36px',
        }}>
        <TitleBlock title='核心数据库' number={coreDatabaseCount} unit='个' />
        <TitleBlock title='数据量' number={dataVolume} unit='tb' />
        <TitleBlock
          title='行业适配'
          number={industryAdaptationCount}
          unit='余个'
        />

        <TitleBlock title='交易处理' number={transactionLevel} />
        <TitleBlock title='全国城市覆盖' number={urbanCoverage} unit='多个' />
      </div>
      <div className={styles.section} style={{ marginTop: '32px' }}>
        <div className={styles.cardContainer}>
          {dataBaseDtos?.map((item) => {
            return <ContentCard key={item.id} dataBaseDto={item} />
          })}
        </div>
      </div>
    </div>
  )
}

export default DataCluster
