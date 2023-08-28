import Id from '../common/id'
import SaleQuantity from './quantity'

type Sale = Readonly<{
  productId: Id
  quantity: SaleQuantity
}>

export default Sale
