import Article from '~/domain/models/article'
import Articles from '~/domain/services/articles'

import InvalidStockItemQuantity from '../exceptions/invalidStockItemQuantity'
import Item from '../models/item'

const StockItem = (articles: Articles) => {
  const execute = async (item: Item, quantity: number) => {
    if (quantity < 1) throw InvalidStockItemQuantity.causeIsLessThanOne()

    const stockedArticles = item.parts.map((part) => {
      const stockedArticle = Article.stock(
        part.article,
        quantity * part.quantity,
      )

      return stockedArticle
    })

    await articles.update(stockedArticles)
  }

  return { execute } as const
}

export default StockItem
