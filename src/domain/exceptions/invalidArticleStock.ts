type InvalidArticleStock = Error & {
  name: 'InvalidArticleStock'
}

const causeIsNegative = (): InvalidArticleStock => ({
  message: 'Article stock can not be less than 0',
  name: 'InvalidArticleStock',
})

const InvalidArticleStock = {
  causeIsNegative,
} as const

export default InvalidArticleStock
