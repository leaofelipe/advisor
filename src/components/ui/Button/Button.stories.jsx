import Button from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['contained', 'outlined', 'text']
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large']
    },
    disabled: { control: 'boolean' },
    href: { control: 'text' },
    onClick: { action: 'clicked' }
  }
}

export const Default = {
  args: {
    children: 'Button',
    variant: 'contained',
    size: 'medium'
  }
}

export const Contained = {
  args: {
    children: 'Contained',
    variant: 'contained'
  }
}

export const Outlined = {
  args: {
    children: 'Outlined',
    variant: 'outlined'
  }
}

export const Text = {
  args: {
    children: 'Text',
    variant: 'text'
  }
}

export const Small = {
  args: {
    children: 'Small',
    size: 'small'
  }
}

export const Large = {
  args: {
    children: 'Large',
    size: 'large'
  }
}

export const Disabled = {
  args: {
    children: 'Disabled',
    variant: 'contained',
    disabled: true
  }
}

export const AsLink = {
  args: {
    children: 'Go to Docs',
    variant: 'outlined',
    href: 'https://base-ui.com'
  }
}
