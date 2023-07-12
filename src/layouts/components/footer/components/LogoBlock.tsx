import styles from './styles.less'

export default function LogoBlock() {
  return (
    <div className={styles.logoWrap}>
      <div className={styles.logo}>logo区域</div>
      <div style={{ color: '#ffffff' }}>浙江省嘉兴市嘉善县西塘镇中兴路</div>
    </div>
  )
}
