import { Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'
import '@/styles/tokens.css'
import '@/styles/global.css'

const preview = {
  decorators: [
    Story => (
      <Theme
        appearance="light"
        accentColor="indigo"
        grayColor="slate"
        radius="medium"
        scaling="100%"
      >
        <Story />
      </Theme>
    )
  ]
}

export default preview
