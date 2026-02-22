import { Flex } from '@radix-ui/themes'
import ResumeOverview from './ResumeOverview'

const containerDecorator = Story => (
  <Flex
    align="center"
    justify="center"
    style={{ minHeight: '100vh', padding: 'var(--space-4)' }}
  >
    <div style={{ width: 300, height: 400 }}>
      <Story />
    </div>
  </Flex>
)

export default {
  title: 'Components/ResumeOverview',
  component: ResumeOverview,
  decorators: [containerDecorator],
  argTypes: {
    title: { control: 'text' },
    value: { control: 'text' }
  }
}

export const Default = {
  args: {
    title: 'Saldo',
    value: 'R$976,23'
  }
}
