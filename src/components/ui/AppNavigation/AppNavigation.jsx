import { TabNav } from '@radix-ui/themes'
import { Link, useLocation } from 'react-router'
import styles from './AppNavigation.module.css'

const items = [
  { label: 'resumo', href: '/resume' },
  { label: 'planejamento', href: '/planning' }
]

function AppNavigation({ className }) {
  const { pathname } = useLocation()

  return (
    <TabNav.Root
      size="2"
      className={[styles.root, className].filter(Boolean).join(' ')}
    >
      {items.map(({ label, href }) => (
        <TabNav.Link key={href} asChild active={pathname === href}>
          <Link to={href}>{label}</Link>
        </TabNav.Link>
      ))}
    </TabNav.Root>
  )
}

export default AppNavigation
