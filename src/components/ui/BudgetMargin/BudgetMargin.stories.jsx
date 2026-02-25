import { Flex } from '@radix-ui/themes'
import BudgetMargin from './BudgetMargin'

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
  title: 'Components/BudgetMargin',
  component: BudgetMargin,
  decorators: [centerDecorator],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' }
  }
}

export const Default = {
  args: {
    label: 'planejado',
    value: 'R$9,00'
  }
}
