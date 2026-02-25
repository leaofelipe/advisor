import { Flex } from '@radix-ui/themes'
import BudgetSetItem from './BudgetSetItem'

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
  title: 'Components/BudgetSetItem',
  component: BudgetSetItem,
  decorators: [centerDecorator],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
    onClick: { action: 'clicked' }
  }
}

export const Default = {
  args: {
    label: 'essencial',
    value: 'R$3.000'
  }
}

export const Dividas = {
  args: {
    label: 'dívidas',
    value: 'R$3.000'
  }
}

export const Investimentos = {
  args: {
    label: 'investimentos',
    value: 'R$3.000'
  }
}
