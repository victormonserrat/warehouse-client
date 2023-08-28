import { FormikHelpers } from 'formik'
import useBeforeUnload from 'lib/use-before-unload'
import useQueue from 'lib/use-queue'
import { useCallback, useEffect, useState } from 'react'

import Item from '~/application/models/item'
import Inventory from '~/application/services/inventory'
import SellItem from '~/application/services/sellItem'
import StockItem from '~/application/services/stockItem'
import useArticles from '~/infrastructure/services/hooks/useArticles'
import useProducts from '~/infrastructure/services/hooks/useProducts'
import useSales from '~/infrastructure/services/hooks/useSales'

import { Values } from './types'

export const useInventoryList = () => {
  const articles = useArticles()
  const products = useProducts()
  const inventory = Inventory(articles, products)
  const queue = useQueue()
  const sales = useSales()
  const sellItem = SellItem(articles).execute
  const stockItem = StockItem(articles).execute

  const [error, setError] = useState<unknown>()
  const [isLoading, setIsLoading] = useState(true)
  const [items, setItems] = useState<Item[]>()

  const handleBeforeUnload = useCallback(
    (event: BeforeUnloadEvent) => {
      if (queue.isEmpty) return

      event.preventDefault()
      event.returnValue = ''

      return event.returnValue
    },
    [queue.isEmpty],
  )

  const handleSellItem = useCallback(
    (item: Item) =>
      async (
        { quantity }: Values,
        { resetForm, validateForm }: FormikHelpers<Values>,
      ) => {
        await sellItem(item, quantity)
        setItems(await inventory.all())
        resetForm()
        validateForm()
        queue.enqueue(async () => {
          try {
            await sales.add({ productId: item.id, quantity })
          } catch {
            stockItem(item, quantity)
          }
        })
      },
    [inventory, queue, sales, sellItem, stockItem],
  )

  useBeforeUnload(handleBeforeUnload)

  useEffect(() => {
    ;(async () => {
      try {
        setItems(await inventory.all())
      } catch (catchedError) {
        setError(catchedError)
      } finally {
        setIsLoading(false)
      }
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { error, handleSellItem, isLoading, items }
}
