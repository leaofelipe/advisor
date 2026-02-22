import { Text } from '@radix-ui/themes'
import AppBar from './AppBar'

export default {
  title: 'Components/AppBar',
  component: AppBar,
  parameters: {
    layout: 'fullscreen'
  }
}

export const Default = {}

export const WithContent = {
  args: {
    children: (
      <Text size="2" style={{ opacity: 0.7 }}>
        resumo &nbsp; planejamento
      </Text>
    ),
    right: (
      <Text size="2" style={{ opacity: 0.7 }}>
        abril, 2026
      </Text>
    )
  }
}
