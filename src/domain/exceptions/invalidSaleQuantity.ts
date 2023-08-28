type InvalidSaleQuantity = Error & {
  name: 'InvalidSaleQuantity'
}

const causeIsLessThanOne = (): InvalidSaleQuantity => ({
  message: 'Sale quantity can not be less than 1',
  name: 'InvalidSaleQuantity',
})

const InvalidSaleQuantity = {
  causeIsLessThanOne,
} as const

export default InvalidSaleQuantity
