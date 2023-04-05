import { ErrorMessage } from '../../components'
import { ProductGrid } from './internal'

import { ReactComponent as Spinner } from '../../assets/icons/spinner.svg'

import { useProducts } from './hooks'

import locales from '../../locales/common.json'

import './index.scss'
import Text from '../../components/text'

const Products = () => {
  const { isLoading, error, products } = useProducts()
  const getContent = () => {
    if (isLoading) return <Spinner className="spinner" />
    if (error) return <ErrorMessage message={error} />

    return products?.length ? (
      <ProductGrid data={products} visibleItems={8} />
    ) : (
      <Text>{locales.products.noProducts}</Text>
    )
  }

  return <div className="products">{getContent()}</div>
}

export default Products
