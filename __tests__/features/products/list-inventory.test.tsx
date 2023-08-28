import { defineFeature, loadFeature } from 'jest-cucumber'
import { rest } from 'msw'

import ArticleDto from '~/infrastructure/models/articleDto'
import ProductDto from '~/infrastructure/models/productDto'
import server from '~/tests/mocks/server'
import {
  givenTheWarehouseHasTheFollowingArticles,
  thenIshouldSeeTheArticlesInEachProduct,
} from '~/tests/steps/articles'
import {
  givenTheWarehouseHasTheFollowingProducts,
  thenIshouldSeeTheFollowingProductsAndQuantities,
  whenIlistTheInventory,
} from '~/tests/steps/products'

const feature = loadFeature('features/products/list-inventory.feature')

defineFeature(feature, (test) => {
  const context: { articles: ArticleDto[]; products: ProductDto[] } = {
    articles: [],
    products: [],
  }

  beforeAll(() => server.listen())

  afterEach(() => server.resetHandlers())

  afterAll(() => server.close())

  test('Listing all', ({ given, then, when }) => {
    givenTheWarehouseHasTheFollowingArticles(given, context)

    givenTheWarehouseHasTheFollowingProducts(given, context)

    whenIlistTheInventory(when)

    thenIshouldSeeTheFollowingProductsAndQuantities(then)

    thenIshouldSeeTheArticlesInEachProduct(then, context)
  })

  test('Listing all with unreliable API', ({ given, then, when }) => {
    givenTheWarehouseHasTheFollowingArticles(given, context)

    givenTheWarehouseHasTheFollowingProducts(given, context)

    given('the API is unreliable', () => {
      server.use(
        rest.get(`${process.env.NEXT_PUBLIC_API_URL}/articles`, (_, res, ctx) =>
          res.once(ctx.status(503)),
        ),
      )
      server.use(
        rest.get(`${process.env.NEXT_PUBLIC_API_URL}/products`, (_, res, ctx) =>
          res.once(ctx.status(503)),
        ),
      )
    })

    whenIlistTheInventory(when)

    thenIshouldSeeTheFollowingProductsAndQuantities(then)

    thenIshouldSeeTheArticlesInEachProduct(then, context)
  })
})
