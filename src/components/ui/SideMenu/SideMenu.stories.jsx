import { MemoryRouter } from 'react-router'
import SideMenu from './SideMenu'

export default {
  title: 'Components/SideMenu',
  component: SideMenu,
  parameters: {
    layout: 'fullscreen'
  }
}

export const Default = {
  decorators: [
    Story => (
      <MemoryRouter initialEntries={['/resume']}>
        <div style={{ display: 'flex', height: '100vh' }}>
          <Story />
        </div>
      </MemoryRouter>
    )
  ]
}

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
