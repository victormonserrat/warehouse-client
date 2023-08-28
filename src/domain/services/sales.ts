import Sale from '../models/sale'

type Sales = Readonly<{
  add: (sale: Sale) => Promise<void>
}>

export default Sales
