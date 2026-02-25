import { Flex } from '@radix-ui/themes'
import IncomeOverviewItem from './IncomeOverviewItem'

const centerDecorator = Story => (
  <Flex
    align="center"
    justify="center"
    style={{ minHeight: '100vh', padding: 'var(--space-4)' }}
  >
    <Story />
  </Flex>
)

export default {
  title: 'Components/IncomeOverviewItem',
  component: IncomeOverviewItem,
  decorators: [centerDecorator],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' }
  }
}

export const Default = {
  args: {
    label: 'saldo anterior',
    value: 'R$430,00'
  }
}

export const Income = {
  args: {
    label: 'entrada',
    value: 'R$13.400,00'
  }
}

export const CreditCards = {
  args: {
    label: 'cartões',
    value: 'R$(13.400,00)'
  }
}
