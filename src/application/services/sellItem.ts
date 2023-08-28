import Article from '~/domain/models/article'
import Articles from '~/domain/services/articles'

import InvalidSoldItemQuantity from '../exceptions/invalidSoldItemQuantity'
import Item from '../models/item'

const SellItem = (articles: Articles) => {
  const execute = async (item: Item, quantity: number) => {
    if (quantity < 1) throw InvalidSoldItemQuantity.causeIsLessThanOne()

    const soldArticles = item.parts.map((part) => {
      const soldArticle = Article.sell(part.article, quantity * part.quantity)

      return soldArticle
    })

    await articles.update(soldArticles)
  }

  return { execute } as const
}

export default SellItem
