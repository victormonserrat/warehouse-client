type InvalidProductQuantity = Error & {
  name: 'InvalidProductQuantity'
}

const causeIsNegative = (): InvalidProductQuantity => ({
  message: 'Product quantity can not be less than 0',
  name: 'InvalidProductQuantity',
})

const InvalidProductQuantity = {
  causeIsNegative,
} as const

export default InvalidProductQuantity
