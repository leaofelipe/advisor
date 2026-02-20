import { Flex } from '@radix-ui/themes'
import { Routes, Route, Navigate } from 'react-router'
import SideMenu from '@/components/ui/SideMenu/SideMenu'
import TopBar from '@/components/ui/TopBar/TopBar'
import Resume from '@/pages/Resume'
import Budgets from '@/pages/Budgets'
import Allocation from '@/pages/Allocation'
import styles from './App.module.css'

function App() {
  return (
    <Flex minHeight="100vh">
      <SideMenu />
      <Flex direction="column" flexGrow="1" minWidth="0">
        <TopBar className={styles.topbar} />
        <Routes>
          <Route path="/" element={<Navigate to="/resume" replace />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/budgets" element={<Budgets />} />
          <Route path="/allocation" element={<Allocation />} />
        </Routes>
      </Flex>
    </Flex>
  )
}

export default App
