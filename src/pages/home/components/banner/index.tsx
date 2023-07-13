import React from 'react'
import { Button, Carousel } from 'antd'
import type { RotationChartDto } from '../../service/type'
import styles from './index.less'

interface IHomeBanner {
  rotationChartDtos: RotationChartDto[]
}

const HomeBanner: React.FC<IHomeBanner> = ({ rotationChartDtos }) => {
  console.log('@@@@@rotationChartDtos======', rotationChartDtos)
  return (
    <div>
      <Carousel className={styles.bannerWrap}>
        {rotationChartDtos.map((item, index) => {
          return (
            <div key={item.id}>
              <div
                className={styles.bannerItem}
                style={{
                  background: ' #364d79',
                  backgroundImage: `url(${item.detailUrl})`,
                }}>
                <div className={styles.textContainer}>
                  {/* <div className={styles.ft46}>创新设计领域大模型</div>
                  <div className={styles.info}>
                    精选优秀文化构成数据选优秀文化构成数选优秀文化构成数据据秀文化构成数据选优秀文化构成数选优秀文化构成数据据
                  </div> */}

                  <div className={styles.ft46}>{item.name}</div>
                  <div className={styles.info}>{item.desc}</div>
                  <div style={{ marginTop: '48px' }}>
                    <Button>了解详情</Button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}

export default HomeBanner
