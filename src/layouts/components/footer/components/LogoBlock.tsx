import logo1 from '@/assets/img/bottom_logo@1x.png'
import logo2 from '@/assets/img/bottom_logo@2x.png'
import logo3 from '@/assets/img/bottom_logo@3x.png'
import location_logo from '@/assets/img/location@2x.png'
import styles from './styles.less'

export default function LogoBlock() {
  return (
    <div className={styles.logoWrap}>
      <div className={styles.left}>
        <img src={logo2} style={{ width: '113px' }} />
        <img src={logo1} style={{ width: '168px' }} />

        <img src={logo3} style={{ width: '161px' }} />
      </div>

      <div className={styles.right}>
        <img src={location_logo} style={{ width: '28px' }} />
        浙江省嘉兴市嘉善县西塘镇中兴路
      </div>
    </div>
  )
}
