import { defineFeature, loadFeature } from 'jest-cucumber'

import ArticleDto from '~/infrastructure/models/articleDto'
import server from '~/tests/mocks/server'
import { givenTheWarehouseHasTheFollowingArticles } from '~/tests/steps/articles'
import {
  givenTheWarehouseHasTheFollowingProducts,
  thenIshouldSeeTheFollowingProductsAndQuantities,
  whenIlistTheInventory,
  whenIsellQuantityItem,
} from '~/tests/steps/products'

const feature = loadFeature('features/sales/add-sale.feature')

defineFeature(feature, (test) => {
  const context: { articles: ArticleDto[] } = { articles: [] }

  beforeAll(() => server.listen())

  afterEach(() => server.resetHandlers())

  afterAll(() => server.close())

  test('Selling an item', ({ given, then, when }) => {
    givenTheWarehouseHasTheFollowingArticles(given, context)

    givenTheWarehouseHasTheFollowingProducts(given, context)

    whenIlistTheInventory(when)

    whenIsellQuantityItem(when)

    thenIshouldSeeTheFollowingProductsAndQuantities(then)
  })

  test('Selling an item with unreliable API', ({ given, then, when }) => {
    givenTheWarehouseHasTheFollowingArticles(given, context)

    givenTheWarehouseHasTheFollowingProducts(given, context)

    whenIlistTheInventory(when)

    whenIsellQuantityItem(when)

    thenIshouldSeeTheFollowingProductsAndQuantities(then)
  })
})
