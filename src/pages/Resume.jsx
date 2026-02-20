import { Box, Heading } from '@radix-ui/themes'

function Resume() {
  return (
    <Box asChild flexGrow="1" p="2">
      <main>
        <Heading as="h1">Resumo</Heading>
      </main>
    </Box>
  )
}

export default Resume
