import { Flex } from '@radix-ui/themes'
import styles from './TopBar.module.css'

export default function TopBar({ children, className, justify = 'center' }) {
  return (
    <Flex
      asChild
      align="center"
      justify={justify}
      flexShrink="0"
      height="46px"
      className={`${styles.topbar}${className ? ` ${className}` : ''}`}
    >
      <div>{children}</div>
    </Flex>
  )
}
