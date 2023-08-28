type InvalidStockArticleQuantity = Error & {
  name: 'InvalidStockArticleQuantity'
}

const causeIsLessThanOne = (): InvalidStockArticleQuantity => ({
  message: 'Stock article quantity can not be less than 1',
  name: 'InvalidStockArticleQuantity',
})

const InvalidStockArticleQuantity = {
  causeIsLessThanOne,
} as const

export default InvalidStockArticleQuantity
