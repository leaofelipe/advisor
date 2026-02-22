import { Container, Flex } from '@radix-ui/themes'
import { Routes, Route, Navigate } from 'react-router'
import AppBar from '@/components/ui/AppBar/AppBar'
import Resume from '@/pages/Resume'
import Planning from '@/pages/Planning'

function App() {
  return (
    <Flex direction="column" minHeight="100vh">
      <AppBar />
      <Container size="4">
        <Routes>
          <Route path="/resume" element={<Resume />} />
          <Route path="/planning" element={<Planning />} />
          <Route path="*" element={<Navigate to="/resume" replace />} />
        </Routes>
      </Container>
    </Flex>
  )
}

export default App
