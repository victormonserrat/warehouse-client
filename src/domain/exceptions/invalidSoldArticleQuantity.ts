type InvalidSoldArticleQuantity = Error & {
  name: 'InvalidSoldArticleQuantity'
}

const causeIsLessThanOne = (): InvalidSoldArticleQuantity => ({
  message: 'Sold article quantity can not be less than 1',
  name: 'InvalidSoldArticleQuantity',
})

const InvalidSoldArticleQuantity = {
  causeIsLessThanOne,
} as const

export default InvalidSoldArticleQuantity
