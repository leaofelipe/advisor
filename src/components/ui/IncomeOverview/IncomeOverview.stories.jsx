import { Flex } from '@radix-ui/themes'
import IncomeOverview from './IncomeOverview'

const centerDecorator = Story => (
  <Flex
    align="center"
    justify="center"
    style={{ minHeight: '100vh', padding: 'var(--space-4)' }}
  >
    <div style={{ width: '100%', maxWidth: 700 }}>
      <Story />
    </div>
  </Flex>
)

export default {
  title: 'Components/IncomeOverview',
  component: IncomeOverview,
  decorators: [centerDecorator],
  argTypes: {
    previousBalance: { control: 'text' },
    income: { control: 'text' },
    creditCards: { control: 'text' }
  }
}

export const Default = {
  args: {
    previousBalance: 'R$430,00',
    income: 'R$13.400,00',
    creditCards: 'R$(13.400,00)'
  }
}
