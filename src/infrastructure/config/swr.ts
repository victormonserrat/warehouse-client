import fetcher from '~/infrastructure/services/http/fetcher'

const config = {
  errorRetryCount: 2,
  errorRetryInterval: 0,
  fetcher: fetcher,
  revalidateOnFocus: false,
} as const

export default config
