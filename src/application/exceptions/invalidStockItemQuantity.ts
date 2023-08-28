type InvalidStockItemQuantity = Error & {
  name: 'InvalidStockItemQuantity'
}

const causeIsLessThanOne = (): InvalidStockItemQuantity => ({
  message: 'Stock item quantity can not be less than 1',
  name: 'InvalidStockItemQuantity',
})

const InvalidStockItemQuantity = {
  causeIsLessThanOne,
} as const

export default InvalidStockItemQuantity
