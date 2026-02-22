import { MemoryRouter } from 'react-router'
import AppBar from './AppBar'

export default {
  title: 'Components/AppBar',
  component: AppBar,
  parameters: {
    layout: 'fullscreen'
  },
  decorators: [
    Story => (
      <MemoryRouter initialEntries={['/resume']}>
        <Story />
      </MemoryRouter>
    )
  ]
}

export const Default = {}
