import DomainArticle from '~/domain/models/article'
import ArticleName from '~/domain/models/article/name'
import ArticleStock from '~/domain/models/article/stock'
import Id from '~/domain/models/common/id'

import ArticleDto from './articleDto'

type Article = DomainArticle

const Article = {
  ...DomainArticle,
  fromDto: (dto: ArticleDto): DomainArticle => ({
    id: Id.fromString(dto.id),
    name: ArticleName.fromString(dto.name),
    stock: ArticleStock.fromNumber(dto.amountInStock),
  }),
} as const

export default Article
