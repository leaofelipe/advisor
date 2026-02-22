import { Box, Flex } from '@radix-ui/themes'
import logoSrc from '@/assets/images/logo-white.svg'
import AppNavigation from '@/components/ui/AppNavigation/AppNavigation'
import DateNavigation from '@/components/ui/DateNavigation/DateNavigation'
import styles from './AppBar.module.css'

function AppBar({ className }) {
  return (
    <Flex
      asChild
      align="center"
      justify="between"
      className={[styles.root, className].filter(Boolean).join(' ')}
    >
      <nav>
        <Box className={styles.left} asChild>
          <a href="/" aria-label="Advisor home">
            <img src={logoSrc} alt="Advisor" className={styles.logo} />
          </a>
        </Box>

        <Box className={styles.center}>
          <AppNavigation />
        </Box>

        <Box className={styles.right}>
          <DateNavigation />
        </Box>
      </nav>
    </Flex>
  )
}

export default AppBar
