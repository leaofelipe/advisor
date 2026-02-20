import { NavLink } from 'react-router'
import { ScrollArea } from '@radix-ui/themes'
import Brand from '@/components/ui/Brand/Brand'
import styles from './LeftMenu.module.css'

const NAV_ITEMS = [
  {
    category: 'App',
    items: [
      {
        label: 'Resumo',
        to: '/resume'
      },
      {
        label: 'Budgets',
        to: '/budgets'
      }
    ]
  },
  {
    category: 'Tools',
    items: [{ label: 'Alocação', to: '/allocation' }]
  }
]

export default function LeftMenu() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.brand}>
        <div className={styles.brandInner}>
          <Brand variant="full" color="white" width="120px" />
        </div>
      </div>

      <ScrollArea type="auto" scrollbars="vertical" className={styles.scroll}>
        <nav className={styles.nav}>
          {NAV_ITEMS.map(group => (
            <div key={group.category}>
              <span className={styles.groupLabel}>{group.category}</span>
              <ul className={styles.list}>
                {group.items.map(item => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        `${styles.link} ${isActive ? styles.linkActive : ''}`.trim()
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </ScrollArea>
    </aside>
  )
}
