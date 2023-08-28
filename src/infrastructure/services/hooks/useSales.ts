import { useCallback } from 'react'

import Sale from '~/domain/models/sale'
import Sales from '~/domain/services/sales'
import SaleDto from '~/infrastructure/models/saleDto'

import postSale from '../http/postSale'

const useSales = (): Sales => {
  const add = useCallback(async (sale: Sale) => {
    let response: Response

    do {
      response = await postSale(SaleDto.fromSale(sale))
    } while (response.status >= 500)

    if (!response.ok) throw response.json()
  }, [])

  return { add }
}

export default useSales
