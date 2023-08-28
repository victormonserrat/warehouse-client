type InvalidArticleName = Error & {
  name: 'InvalidArticleName'
}

const causeIsBlank = (): InvalidArticleName => ({
  message: 'Article name can not be blank',
  name: 'InvalidArticleName',
})

const InvalidArticleName = {
  causeIsBlank,
} as const

export default InvalidArticleName
