import InvalidProductName from '~/domain/exceptions/invalidProductName'

type ProductName = string

const fromString = (value: string): ProductName => {
  if (!value.trim()) throw InvalidProductName.causeIsBlank()

  return value
}

const ProductName = {
  fromString,
} as const

export default ProductName
