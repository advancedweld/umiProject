/*
 * @Author: xiangshangzhi
 * @Date: 2023-07-07 10:15:41
 * @FilePath: \umiProject\src\pages\about\components\LocationBlock.tsx
 * @Description:
 */
import type { AboutUsResponse } from '../service/type'
import location_logo from '@/assets/img/location@2x.png'

import styles from './style.less'

type ILocationBlock = {
  thirdInformationDto: AboutUsResponse['thirdInformationDto']
}

const LocationBlock: React.FC<ILocationBlock> = ({ thirdInformationDto }) => {
  console.log('🚀 ~ file: TopBanner.tsx:20 ~ secondInformationDto:', thirdInformationDto)

  return (
    <div className={styles.midWrap}>
      <div className={styles.left} style={{ backgroundImage: `url(${thirdInformationDto.url})` }}></div>
      <div className={styles.right}>
        <div>
          <div className={styles.title}>{thirdInformationDto.title}</div>
          <div style={{ marginTop: '32px' }}>
            <img src={location_logo} style={{ width: '28px' }} />

            <span>地址</span>
          </div>
          <div className={styles.detail} style={{ marginTop: '8px' }}>
            {thirdInformationDto.subTitle}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LocationBlock
