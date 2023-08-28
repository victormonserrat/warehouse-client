type NotFoundArticle = Error & {
  name: 'NotFoundArticle'
}

const withId = (id: string): NotFoundArticle => ({
  message: `Article "${id}" can not be found`,
  name: 'NotFoundArticle',
})

const NotFoundArticle = {
  withId,
} as const

export default NotFoundArticle
