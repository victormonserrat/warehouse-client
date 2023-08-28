import Article from '../models/article'

type Articles = Readonly<{
  update: (articles: Article[]) => Promise<void>
  withId: (id: string) => Promise<Article>
}>

export default Articles
