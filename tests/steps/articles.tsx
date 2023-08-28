import { DefineStepFunction } from 'jest-cucumber'
import { rest } from 'msw'
import { v4 as uuid } from 'uuid'

import ArticleDto from '~/infrastructure/models/articleDto'
import ProductDto from '~/infrastructure/models/productDto'
import { screen, within } from '~/tests/utils'

import server from '../mocks/server'
import ArticlesTable from '../tables/articles'

export const givenTheWarehouseHasTheFollowingArticles = (
  given: DefineStepFunction,
  context?: { articles: ArticleDto[] },
) =>
  given(
    /^(the warehouse has )?the following articles:$/,
    (_, table: ArticlesTable) => {
      const articles = table.map((item) => {
        const article = {
          amountInStock: item.stock,
          id: uuid(),
          name: item.name,
        }

        return article
      })

      server.use(
        rest.get(
          `${process.env.NEXT_PUBLIC_API_URL}/articles`,
          (__, res, ctx) => res(ctx.json(articles)),
        ),
      )

      if (context) context.articles = articles
    },
  )

export const thenIshouldSeeTheArticlesInEachProduct = (
  then: DefineStepFunction,
  context: { articles: ArticleDto[]; products: ProductDto[] },
) =>
  then(/^(I should see )?the articles in each product$/, () => {
    context.products.forEach((product) => {
      const productElement = screen.getByText(product.name).parentElement

      if (!productElement) throw 'Not found product element'

      product.articles.forEach((productArticle) => {
        const article = context.articles.find(
          ({ id }) => id === productArticle.id,
        )

        if (!article) throw 'Not found article'

        expect(
          within(productElement).getByText(article.name, { exact: false }),
        ).toBeInTheDocument()
      })
    })
  })
