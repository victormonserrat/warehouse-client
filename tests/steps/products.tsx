import { DefineStepFunction } from 'jest-cucumber'
import { rest } from 'msw'
import { v4 as uuid } from 'uuid'

import ArticleDto from '~/infrastructure/models/articleDto'
import ProductDto from '~/infrastructure/models/productDto'
import Home from '~/pages'
import {
  render,
  screen,
  userEvent,
  waitFor,
  waitForElementToBeRemoved,
  within,
} from '~/tests/utils'

import server from '../mocks/server'
import ProductsTable, { ProductStocksTable } from '../tables/products'

export const givenTheWarehouseHasTheFollowingProducts = (
  given: DefineStepFunction,
  context: { articles: ArticleDto[]; products?: ProductDto[] },
) =>
  given(
    /^(the warehouse has )?the following products:$/,
    (_, table: ProductsTable) => {
      const products: ProductDto[] = table.map((item) => {
        const product = {
          articles: item.parts.split(',').map((part) => {
            const [articleName, quantity] = part.split(':')
            const article = context.articles.find(
              ({ name }) => name === articleName,
            )

            if (!article) throw 'Not found article'

            return {
              amountRequired: Number(quantity),
              id: article.id,
            }
          }),
          id: uuid(),
          name: item.name,
        }

        return product
      })

      server.use(
        rest.get(
          `${process.env.NEXT_PUBLIC_API_URL}/products`,
          (__, res, ctx) => res(ctx.json(products)),
        ),
      )

      if (context.products) context.products = products
    },
  )

export const thenIshouldSeeTheFollowingProductsAndQuantities = (
  then: DefineStepFunction,
) =>
  then(
    /^(I should see )?the following (example .*)?products and quantities:$/,
    (_, example: string | undefined, table: ProductStocksTable) => {
      const exampleName = example?.substring(8)
      const items = example
        ? table.filter((item) => item.example?.trim() === exampleName?.trim())
        : table

      items.forEach((item) => {
        const productElement = screen.getByText(item.name).parentElement

        if (!productElement) throw 'Not found product element'

        expect(productElement).toBeInTheDocument()
        expect(
          within(productElement).getByText('stock', { exact: false }),
        ).toHaveTextContent(item.stock > 0 ? item.stock.toString() : 'Out')
      })
    },
  )

export const whenIlistTheInventory = (when: DefineStepFunction) =>
  when('I list the inventory', async () => {
    render(<Home />)

    const loading = screen.queryByLabelText('Loading')

    await waitForElementToBeRemoved(loading)
  })

export const whenIsellQuantityItem = (when: DefineStepFunction) =>
  when(
    /^I sell (\d+) (.*?)( and the API is unreliable)?$/,
    async (quantity: number, item: string, unreliable: boolean) => {
      const productElement = screen.getByText(item).parentElement

      if (!productElement) throw 'Not found product element'

      const input = within(productElement).getByRole('spinbutton')
      const submit = within(productElement).getByRole('button')

      server.use(
        rest.post(`${process.env.NEXT_PUBLIC_API_URL}/sales`, (_, res, ctx) =>
          res(ctx.status(201)),
        ),
      )

      if (unreliable) {
        server.use(
          rest.post(`${process.env.NEXT_PUBLIC_API_URL}/sales`, (_, res, ctx) =>
            res.once(ctx.status(503)),
          ),
        )
      }

      userEvent.clear(input)
      userEvent.type(input, quantity.toString())
      jest.clearAllMocks().spyOn(global, 'fetch')
      userEvent.click(submit)

      await waitFor(() => expect(fetch).toHaveBeenCalled())

      if (unreliable)
        await waitFor(() => expect(fetch).toHaveBeenCalledTimes(2))
    },
  )
