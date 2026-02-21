import Button from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: { control: 'select', options: ['solid', 'outline'] },
    disabled: { control: 'boolean' },
    children: { control: 'text' }
  }
}

export const Default = {
  args: { children: 'Button', variant: 'solid' }
}

export const Outline = {
  args: { children: 'Button', variant: 'outline' }
}

export const Disabled = {
  args: { children: 'Button', variant: 'solid', disabled: true }
}

export const DisabledOutline = {
  args: { children: 'Button', variant: 'outline', disabled: true }
}
