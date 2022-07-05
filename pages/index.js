import Layout from '../components/Layout.js'
import data from '../utils/data.js'
import ProductItem from '../components/productItem'

export default function Home() {
  return (
      <Layout title='Home Page'>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4'>
{data.products.map((product) => (
  <ProductItem product ={product} key={product.slug}></ProductItem>
))}
        </div>
      </Layout>
   
  )
}
