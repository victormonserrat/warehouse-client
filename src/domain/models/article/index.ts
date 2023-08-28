import InvalidSoldArticleQuantity from '~/domain/exceptions/invalidSoldArticleQuantity'
import InvalidStockArticleQuantity from '~/domain/exceptions/invalidStockArticleQuantity'

import Id from '../common/id'
import ArticleName from './name'
import ArticleStock from './stock'

type Article = Readonly<{
  id: Id
  name: ArticleName
  stock: ArticleStock
}>

const sell = (article: Article, quantity: number): Article => {
  if (quantity < 1) throw InvalidSoldArticleQuantity.causeIsLessThanOne()

  return {
    ...article,
    stock: ArticleStock.fromNumber(article.stock - quantity),
  }
}

const stock = (article: Article, quantity: number): Article => {
  if (quantity < 1) throw InvalidStockArticleQuantity.causeIsLessThanOne()

  return {
    ...article,
    stock: ArticleStock.fromNumber(article.stock + quantity),
  }
}

const Article = {
  sell,
  stock,
} as const

export default Article
