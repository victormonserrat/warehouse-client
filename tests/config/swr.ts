import defaultConfig from '~/infrastructure/config/swr'

const config = {
  ...defaultConfig,
  provider: () => new Map(),
}

export default config
