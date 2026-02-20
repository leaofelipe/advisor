import { MemoryRouter } from 'react-router'
import LeftMenu from './LeftMenu'

export default {
  title: 'Components/LeftMenu',
  component: LeftMenu,
  decorators: [
    Story => (
      <MemoryRouter initialEntries={['/resume']}>
        <div style={{ display: 'flex', height: '100vh' }}>
          <Story />
        </div>
      </MemoryRouter>
    )
  ],
  parameters: {
    layout: 'fullscreen'
  }
}

export const Default = {}

export const AllocationActive = {
  decorators: [
    Story => (
      <MemoryRouter initialEntries={['/allocation']}>
        <div style={{ display: 'flex', height: '100vh' }}>
          <Story />
        </div>
      </MemoryRouter>
    )
  ]
}
