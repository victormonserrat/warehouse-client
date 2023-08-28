import Article from '~/domain/models/article'
import Product from '~/domain/models/product'

type Item = Readonly<
  Omit<Product, 'parts'> & {
    parts: {
      article: Article
      quantity: number
    }[]
    stock: number
  }
>

export default Item
