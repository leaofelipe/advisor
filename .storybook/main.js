import path from 'path'
import { mergeConfig } from 'vite'

export default {
  stories: ['../src/**/*.stories.@(js|jsx)'],
  addons: [],
  framework: { name: '@storybook/react-vite', options: {} },
  viteFinal: async config => {
    return mergeConfig(config, {
      resolve: {
        alias: { '@': path.resolve(__dirname, '../src') }
      }
    })
  }
}
