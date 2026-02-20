import { Routes, Route, Navigate } from 'react-router'
import LeftMenu from '@/components/ui/LeftMenu/LeftMenu'
import TopBar from '@/components/ui/TopBar/TopBar'
import Resume from '@/pages/Resume'
import Budgets from '@/pages/Budgets'
import Allocation from '@/pages/Allocation'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.layout}>
      <LeftMenu />
      <div className={styles.main}>
        <TopBar className={styles.topbar} />
        <Routes>
          <Route path="/" element={<Navigate to="/resume" replace />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/budgets" element={<Budgets />} />
          <Route path="/allocation" element={<Allocation />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
