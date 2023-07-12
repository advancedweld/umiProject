import React from 'react'

import { Button, Carousel } from 'antd'
import styles from './index.less'

interface IHomeBanner {
  bannerList: any[]
}

const HomeBanner: React.FC<IHomeBanner> = ({ bannerList }) => {
  console.log('@@@@@bannerList======', bannerList)
  return (
    <div>
      <Carousel className={styles.bannerWrap}>
        {bannerList.map((item, index) => {
          return (
            <div key={index}>
              <div
                className={styles.bannerItem}
                style={{
                  backgroundImage: item.imgUrl,
                }}>
                {/* <img src={item.imgUrl} alt='这里是图片' /> */}
                <div className={styles.textContainer}>
                  <div className={styles.ft46}>创新设计领域大模型</div>
                  <div className={styles.info}>
                    精选优秀文化构成数据选优秀文化构成数选优秀文化构成数据据秀文化构成数据选优秀文化构成数选优秀文化构成数据据
                  </div>
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
