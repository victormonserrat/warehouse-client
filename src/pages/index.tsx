import type { NextPage } from 'next'
import Head from 'next/head'

import InventoryList from '~/infrastructure/containers/products/InventoryList'

const Home: NextPage = () => (
  <>
    <Head>
      <title>Warehouse Inventory</title>
      <meta name="description" content="Warehouse inventory" />
    </Head>
    <InventoryList />
  </>
)

export default Home
