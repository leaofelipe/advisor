import { Flex } from '@radix-ui/themes'
import AppBar from '@/components/ui/AppBar/AppBar'
import Resume from '@/pages/Resume'

function App() {
  return (
    <Flex direction="column" minHeight="100vh">
      <AppBar />
      <Resume />
    </Flex>
  )
}

export default App
