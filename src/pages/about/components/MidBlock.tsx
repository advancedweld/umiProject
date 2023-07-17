/*
 * @Author: xiangshangzhi
 * @Date: 2023-07-07 10:15:41
 * @FilePath: \umiProject\src\pages\about\components\MidBlock.tsx
 * @Description:
 */
import type { AboutUsResponse } from '../service/type'
import styles from './style.less'

type IMidBlock = {
  secondInformationDto: AboutUsResponse['secondInformationDto']
}

const MidBlock: React.FC<IMidBlock> = ({ secondInformationDto }) => {
  console.log('🚀 ~ file: TopBanner.tsx:20 ~ secondInformationDto:', secondInformationDto)

  return (
    <div className={styles.midWrap}>
      <div className={styles.left} style={{ backgroundImage: `url(${secondInformationDto.url})` }}></div>
      <div className={styles.right}>
        <div style={{ marginTop: '34px' }}>
          <div className={styles.title}>{secondInformationDto.platformIntroductionTitle}</div>
          <div className={styles.detail}>{secondInformationDto.platformIntroductionDetail}</div>
        </div>

        <div style={{ marginTop: '40px' }}>
          <div className={styles.title}>{secondInformationDto.leaderIntroductionTitle}</div>
          <div className={styles.detail}>{secondInformationDto.leaderIntroductionDetail}</div>
        </div>
      </div>
    </div>
  )
}

export default MidBlock
