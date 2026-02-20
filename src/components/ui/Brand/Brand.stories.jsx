import Brand from './Brand'

export default {
  title: 'Components/Brand',
  component: Brand,
  argTypes: {
    variant: {
      control: 'select',
      options: ['full', 'only']
    },
    color: {
      control: 'select',
      options: ['blue', 'white']
    },
    width: { control: 'number' }
  }
}

export const Default = {
  args: {
    variant: 'full',
    color: 'blue',
    width: 160
  }
}

export const White = {
  args: {
    variant: 'full',
    color: 'white',
    width: 160
  },
  decorators: [
    Story => (
      <div
        style={{
          padding: 'var(--spacing-md)',
          background: 'var(--secondary-9)'
        }}
      >
        <Story />
      </div>
    )
  ]
}

export const WhiteSmall = {
  args: {
    variant: 'only',
    color: 'white',
    width: 48
  },
  decorators: [
    Story => (
      <div
        style={{
          padding: 'var(--spacing-md)',
          background: 'var(--secondary-9)'
        }}
      >
        <Story />
      </div>
    )
  ]
}

export const BlueSmall = {
  args: {
    variant: 'only',
    color: 'blue',
    width: 48
  }
}
