import TopBar from './TopBar'

export default {
  title: 'Components/TopBar',
  component: TopBar,
  argTypes: {
    children: { control: 'text' }
  }
}

export const Default = {}

export const WithContent = {
  args: {
    children: 'Page Title'
  }
}
