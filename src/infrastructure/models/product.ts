import Id from '~/domain/models/common/id'
import DomainProduct from '~/domain/models/product'
import ProductName from '~/domain/models/product/name'
import ProductQuantity from '~/domain/models/product/quantity'

import ProductDto from './productDto'

type Product = DomainProduct

const Product = {
  fromDto: (dto: ProductDto): DomainProduct => ({
    id: Id.fromString(dto.id),
    name: ProductName.fromString(dto.name),
    parts: dto.articles.map((article) => ({
      articleId: Id.fromString(article.id),
      quantity: ProductQuantity.fromNumber(article.amountRequired),
    })),
  }),
} as const

export default Product
