import InvalidArticleStock from '~/domain/exceptions/invalidArticleStock'

type ArticleStock = number

const fromNumber = (value: number): ArticleStock => {
  if (value < 0) throw InvalidArticleStock.causeIsNegative()

  return value
}

const ArticleStock = {
  fromNumber,
} as const

export default ArticleStock
