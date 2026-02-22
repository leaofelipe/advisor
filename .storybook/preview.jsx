import { Theme } from '@radix-ui/themes'
import '@/styles/index.css'

const preview = {
  decorators: [
    Story => (
      <Theme
        appearance="dark"
        accentColor="indigo"
        grayColor="slate"
        radius="medium"
        scaling="100%"
      >
        <div
          style={{
            background: 'var(--color-background)',
            minHeight: '100vh',
            padding: '1rem'
          }}
        >
          <Story />
        </div>
      </Theme>
    )
  ]
}

export default preview
