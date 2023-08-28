import Article from '~/domain/models/article'

type ArticleDto = Readonly<{
  amountInStock: number
  id: string
  name: string
}>

const ArticleDto = {
  fromArticle: (article: Article): ArticleDto => ({
    amountInStock: article.stock,
    id: article.id,
    name: article.name,
  }),
} as const

export default ArticleDto
