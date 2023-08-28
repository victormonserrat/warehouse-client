import Sale from '~/domain/models/sale'

type SaleDto = Readonly<{
  amountSold: number
  productId: string
}>

const SaleDto = {
  fromSale: (sale: Sale): SaleDto => ({
    amountSold: sale.quantity,
    productId: sale.productId,
  }),
} as const

export default SaleDto
