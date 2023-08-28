import { useState } from 'react'
import useSWR, { BareFetcher, Key, SWRConfiguration, useSWRConfig } from 'swr'

const useRetryingSWR = <
  Data,
  Error extends {
    status: number
  },
>(
  key: Key,
  fetcher?: BareFetcher<Data> | null,
  config?: SWRConfiguration<Data, Error, BareFetcher<Data>>,
) => {
  const globalConfig = useSWRConfig()
  const [isRetrying, setIsRetrying] = useState(false)

  const response = useSWR<Data, Error>(key, fetcher ?? null, {
    onError: (error: Error) => {
      if (error.status < 500) return setIsRetrying(false)

      setIsRetrying(true)
    },
    onErrorRetry: (error: Error, _, __, revalidate, revalidateOptions) => {
      if (error.status < 500) return

      const retryCount = config?.errorRetryCount ?? globalConfig.errorRetryCount

      if (retryCount && revalidateOptions.retryCount > retryCount)
        return setIsRetrying(false)

      const retryInterval =
        config?.errorRetryInterval ?? globalConfig.errorRetryInterval

      setTimeout(() => revalidate(revalidateOptions), retryInterval)
    },
    onSuccess: () => setIsRetrying(false),
    ...config,
  })

  const isLoading = !response.data && (!response.error || isRetrying)

  return { ...response, isLoading, isRetrying } as const
}

export default useRetryingSWR
