import Id from '../common/id'
import ProductName from './name'
import ProductQuantity from './quantity'

type Product = Readonly<{
  id: Id
  name: ProductName
  parts: {
    articleId: Id
    quantity: ProductQuantity
  }[]
}>

export default Product
