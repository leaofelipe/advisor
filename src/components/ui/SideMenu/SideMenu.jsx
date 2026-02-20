import { Flex, ScrollArea } from '@radix-ui/themes'
import { NavLink } from 'react-router'
import Brand from '@/components/ui/Brand/Brand'
import TopBar from '@/components/ui/TopBar/TopBar'
import styles from './SideMenu.module.css'

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

export default function SideMenu() {
  return (
    <Flex asChild direction="column" className={styles.sidebar}>
      <aside>
        <TopBar className={styles.brandBar}>
          <Flex align="center">
            <Brand variant="full" color="white" width="120px" />
          </Flex>
        </TopBar>

        <ScrollArea type="auto" scrollbars="vertical" className={styles.scroll}>
          <Flex asChild direction="column" gap="2" px="3" py="2">
            <nav>
              {NAV_ITEMS.map(group => (
                <div key={group.category}>
                  <span className={styles.groupLabel}>{group.category}</span>
                  <Flex asChild direction="column" gap="1">
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
                  </Flex>
                </div>
              ))}
            </nav>
          </Flex>
        </ScrollArea>
      </aside>
    </Flex>
  )
}
