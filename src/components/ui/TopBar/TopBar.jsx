import { Flex } from '@radix-ui/themes'
import styles from './TopBar.module.css'

export default function TopBar({ children, className }) {
  return (
    <Flex
      asChild
      align="center"
      className={`${styles.topbar}${className ? ` ${className}` : ''}`}
    >
      <header>{children}</header>
    </Flex>
  )
}
