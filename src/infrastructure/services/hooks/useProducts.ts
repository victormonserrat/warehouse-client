import useRetryingSWR from 'lib/swr/use-retrying-swr'
import { useCallback, useEffect, useMemo, useState } from 'react'

import Products from '~/domain/services/products'
import ErrorDto from '~/infrastructure/models/errorDto'
import Product from '~/infrastructure/models/product'
import ProductDto from '~/infrastructure/models/productDto'

const useProducts = (): Products => {
  const [shouldFetch, setShouldFetch] = useState(false)
  const { data, error, isLoading } = useRetryingSWR<ProductDto[], ErrorDto>(
    shouldFetch ? `${process.env.NEXT_PUBLIC_API_URL}/products` : null,
  )

  const response: {
    error?: ErrorDto
    isLoading?: boolean
    products?: Product[]
  } = useMemo(() => ({}), [])

  const all = useCallback(async (): Promise<Product[]> => {
    setShouldFetch(true)

    if (response.isLoading) {
      return await new Promise((resolve) =>
        setTimeout(async () => {
          resolve(await all())
        }),
      )
    }

    if (!response.products) throw response.error

    return response.products
  }, [response])

  useEffect(() => {
    response.error = error
  }, [error, response])

  useEffect(() => {
    response.isLoading = isLoading
  }, [isLoading, response])

  useEffect(() => {
    response.products = data?.map((item) => Product.fromDto(item))
  }, [data, response])

  return { all } as const
}

export default useProducts
