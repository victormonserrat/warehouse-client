import Articles from '~/domain/services/articles'
import Products from '~/domain/services/products'

import Item from '../models/item'

const Inventory = (articles: Articles, products: Products) => {
  const all = async (): Promise<Item[]> => {
    const allProducts = await products.all()

    const items = await Promise.all(
      allProducts.map(async (product) => {
        let stock = Infinity

        const parts = await Promise.all(
          product.parts.map(async (productPart) => {
            const partArticle = await articles.withId(productPart.articleId)
            const part = {
              article: partArticle,
              quantity: productPart.quantity,
            }
            const partStock = ~~(part.article.stock / part.quantity)

            if (partStock < stock) stock = partStock

            return part
          }),
        )

        const item = { ...product, parts, stock }

        return item
      }),
    )

    return items
  }

  return { all } as const
}

export default Inventory
