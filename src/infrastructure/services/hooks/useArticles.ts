import useRetryingSWR from 'lib/swr/use-retrying-swr'
import { useCallback, useEffect, useMemo, useState } from 'react'

import NotFoundArticle from '~/domain/exceptions/notFoundArticle'
import Articles from '~/domain/services/articles'
import Article from '~/infrastructure/models/article'
import ArticleDto from '~/infrastructure/models/articleDto'
import ErrorDto from '~/infrastructure/models/errorDto'

const useArticles = (): Articles => {
  const [shouldFetch, setShouldFetch] = useState(false)
  const { data, error, isLoading, mutate } = useRetryingSWR<
    ArticleDto[],
    ErrorDto
  >(shouldFetch ? `${process.env.NEXT_PUBLIC_API_URL}/articles` : null)

  const response: {
    articles?: Article[]
    error?: ErrorDto
    isLoading?: boolean
  } = useMemo(() => ({}), [])

  const all = useCallback(async (): Promise<Article[]> => {
    setShouldFetch(true)

    if (response.isLoading) {
      return await new Promise((resolve) =>
        setTimeout(async () => {
          resolve(await all())
        }),
      )
    }

    if (!response.articles) throw response.error

    return response.articles
  }, [response])

  const update = useCallback(
    async (articles: Article[]) => {
      await all()
      mutate(
        (current) =>
          current?.map((article) => {
            const found = articles.find(({ id }) => id === article.id)

            const updatedArticle = found
              ? ArticleDto.fromArticle(found)
              : article

            return updatedArticle
          }),
        false,
      )
    },
    [all, mutate],
  )

  const withId = useCallback(
    async (id: string) => {
      const allArticles = await all()
      const found = allArticles.find((item) => item.id === id)

      if (!found) throw NotFoundArticle

      return found
    },
    [all],
  )

  useEffect(() => {
    response.error = error
  }, [error, response])

  useEffect(() => {
    response.isLoading = isLoading
  }, [isLoading, response])

  useEffect(() => {
    response.articles = data?.map((item) => Article.fromDto(item))
  }, [data, response])

  return { update, withId }
}

export default useArticles
