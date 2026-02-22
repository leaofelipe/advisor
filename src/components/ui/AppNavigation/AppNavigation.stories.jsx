import { MemoryRouter } from 'react-router'
import AppBar from '@/components/ui/AppBar/AppBar'
import AppNavigation from './AppNavigation'

export default {
  title: 'Components/AppNavigation',
  component: AppNavigation,
  parameters: {
    layout: 'fullscreen'
  },
  decorators: [
    (Story, { args }) => (
      <MemoryRouter initialEntries={args.initialEntries || ['/resume']}>
        <AppBar />
      </MemoryRouter>
    )
  ]
}

export const Default = {}

export const PlanejamentoActive = {
  args: { initialEntries: ['/planning'] }
}
