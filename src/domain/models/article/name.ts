import InvalidArticleName from '~/domain/exceptions/invalidArticleName'

type ArticleName = string

const fromString = (value: string): ArticleName => {
  if (!value.trim()) throw InvalidArticleName.causeIsBlank()

  return value
}

const ArticleName = {
  fromString,
} as const

export default ArticleName
