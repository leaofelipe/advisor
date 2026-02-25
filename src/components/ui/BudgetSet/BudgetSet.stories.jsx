import { Flex } from '@radix-ui/themes'
import BudgetSet from './BudgetSet'

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

const defaultItems = [
  { label: 'essencial', value: 'R$3.000' },
  { label: 'dívidas', value: 'R$3.000' },
  { label: 'reserva', value: 'R$3.000' },
  { label: 'investimentos', value: 'R$3.000' },
  { label: 'margem', value: 'R$3.000' }
]

export default {
  title: 'Components/BudgetSet',
  component: BudgetSet,
  decorators: [centerDecorator],
  argTypes: {
    onItemClick: { action: 'itemClicked' }
  }
}

export const Default = {
  args: {
    items: defaultItems
  }
}
