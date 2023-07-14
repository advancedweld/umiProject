import logo1 from '@/assets/img/bottom_logo@1x.png'
import logo2 from '@/assets/img/bottom_logo@2x.png'
import logo3 from '@/assets/img/bottom_logo@3x.png'
import location_logo from '@/assets/img/location@2x.png'
import styles from './styles.less'

export default function LogoBlock() {
  return (
    <div className={styles.logoWrap}>
      <div className={styles.left}>
        <img src={logo3} style={{ width: '113px', height: '46px' }} />

        <img src={logo1} style={{ width: '168px', height: '35px' }} />
        <img src={logo2} style={{ width: '161px', height: '22px', marginTop: '20px' }} />
      </div>

      <div className={styles.right}>
        <img src={location_logo} style={{ width: '28px' }} />
        <span>浙江省嘉兴市嘉善县西塘镇中兴路828号8幢（祥符荡科创绿谷）</span>
      </div>
    </div>
  )
}
