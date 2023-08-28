import Product from '../models/product'

type Products = Readonly<{
  all: () => Promise<Product[]>
}>

export default Products
