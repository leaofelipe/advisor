import { Container } from '@radix-ui/themes'
import logoSrc from '@/assets/images/logo-white.svg'
import AppNavigation from '@/components/ui/AppNavigation/AppNavigation'
import DateNavigation from '@/components/ui/DateNavigation/DateNavigation'
import styles from './AppBar.module.css'

function AppBar({ className }) {
  return (
    <Container
      className={[styles.root, className].filter(Boolean).join(' ')}
      size="2"
      flexGrow="0"
    >
      <nav className={styles.nav}>
        <a href="/" aria-label="Advisor home" className={styles.left}>
          <img src={logoSrc} alt="Advisor" className={styles.logo} />
        </a>

        <div className={styles.center}>
          <AppNavigation />
        </div>

        <div className={styles.right}>
          <DateNavigation />
        </div>
      </nav>
    </Container>
  )
}

export default AppBar
