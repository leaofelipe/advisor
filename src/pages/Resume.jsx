import { Grid, Box, Flex } from '@radix-ui/themes'
import ResumeItem from '@/components/ui/ResumeItem/ResumeItem'
import ResumeOverview from '@/components/ui/ResumeOverview/ResumeOverview'

function Resume() {
  return (
    <Grid columns="2" gap="4">
      <Box>
        <Flex direction="column" gap="2">
          <ResumeItem title="Essencial" value="R$3.500,00" />
          <ResumeItem title="Dívidas" value="R$2.700,00" />
          <ResumeItem title="Reserva" value="R$700,00" />
          <ResumeItem title="Investimentos" value="R$3.000,00" />
          <ResumeItem title="Margem" value="R$2.550,00" />
        </Flex>
      </Box>
      <Box>
        <ResumeOverview title="Saldo" value="R$1.789,54" />
      </Box>
    </Grid>
  )
}

export default Resume
