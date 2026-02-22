import { Box, Flex } from '@radix-ui/themes'
import logoSrc from '@/assets/images/logo-white.svg'
import styles from './AppBar.module.css'

function AppBar({ children, right, className }) {
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

        <Box className={styles.center}>{children}</Box>

        <Box className={styles.right}>{right}</Box>
      </nav>
    </Flex>
  )
}

export default AppBar
