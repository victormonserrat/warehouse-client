import InvalidProductQuantity from '~/domain/exceptions/invalidProductQuantity'

type ProductQuantity = number

const fromNumber = (value: number): ProductQuantity => {
  if (value < 0) throw InvalidProductQuantity.causeIsNegative()

  return value
}

const ProductQuantity = {
  fromNumber,
} as const

export default ProductQuantity
