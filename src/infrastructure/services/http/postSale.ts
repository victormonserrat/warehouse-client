import SaleDto from '~/infrastructure/models/saleDto'

import client from './client'

const postSale = (dto: SaleDto) =>
  client.post(`${process.env.NEXT_PUBLIC_API_URL}/sales`, JSON.stringify(dto))

export default postSale
