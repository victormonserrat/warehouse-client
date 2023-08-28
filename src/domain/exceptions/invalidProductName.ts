type InvalidProductName = Error & {
  name: 'InvalidProductName'
}

const causeIsBlank = (): InvalidProductName => ({
  message: 'Product name can not be blank',
  name: 'InvalidProductName',
})

const InvalidProductName = {
  causeIsBlank,
} as const

export default InvalidProductName
