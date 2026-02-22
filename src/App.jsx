import { Flex } from '@radix-ui/themes'
import { Routes, Route, Navigate } from 'react-router'
import AppBar from '@/components/ui/AppBar/AppBar'
import AppNavigation from '@/components/ui/AppNavigation/AppNavigation'
import Resume from '@/pages/Resume'
import Planning from '@/pages/Planning'

function App() {
  return (
    <Flex direction="column" minHeight="100vh">
      <AppBar>
        <AppNavigation />
      </AppBar>
      <Routes>
        <Route path="/resume" element={<Resume />} />
        <Route path="/planning" element={<Planning />} />
        <Route path="*" element={<Navigate to="/resume" replace />} />
      </Routes>
    </Flex>
  )
}

export default App
