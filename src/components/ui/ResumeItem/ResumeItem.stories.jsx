import { Flex } from '@radix-ui/themes'
import ResumeItem from './ResumeItem'

const centerDecorator = Story => (
  <Flex
    align="center"
    justify="center"
    style={{ minHeight: '100vh', padding: 'var(--space-4)' }}
  >
    <div style={{ width: '100%', maxWidth: 300 }}>
      <Story />
    </div>
  </Flex>
)

export default {
  title: 'Components/ResumeItem',
  component: ResumeItem,
  decorators: [centerDecorator],
  argTypes: {
    title: { control: 'text' },
    value: { control: 'text' },
    selected: { control: 'boolean' }
  }
}

export const Default = {
  args: {
    title: 'Essencial',
    value: 'R$1.500,00',
    selected: false
  }
}

export const Selected = {
  args: {
    title: 'dívidas',
    value: 'R$1.500,00',
    selected: true
  }
}

export const BothStates = {
  render: () => (
    <Flex direction="column" gap="3">
      <ResumeItem title="Essencial" value="R$1.500,00" selected={false} />
      <ResumeItem title="dívidas" value="R$1.500,00" selected={true} />
      <ResumeItem title="Lazer" value="R$800,00" selected={false} />
      <ResumeItem title="Investimentos" value="R$2.000,00" selected={false} />
    </Flex>
  )
}
