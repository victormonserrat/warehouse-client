type ProductDto = Readonly<{
  articles: {
    amountRequired: number
    id: string
  }[]
  id: string
  name: string
}>

export default ProductDto
