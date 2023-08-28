import InvalidSaleQuantity from '~/domain/exceptions/invalidSaleQuantity'

type SaleQuantity = number

const fromNumber = (value: number): SaleQuantity => {
  if (value < 0) throw InvalidSaleQuantity.causeIsLessThanOne()

  return value
}

const SaleQuantity = {
  fromNumber,
} as const

export default SaleQuantity
