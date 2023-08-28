type InvalidSoldItemQuantity = Error & {
  name: 'InvalidSoldItemQuantity'
}

const causeIsLessThanOne = (): InvalidSoldItemQuantity => ({
  message: 'Sold item quantity can not be less than 1',
  name: 'InvalidSoldItemQuantity',
})

const InvalidSoldItemQuantity = {
  causeIsLessThanOne,
} as const

export default InvalidSoldItemQuantity
