import { useEffect, useState, useCallback } from 'react'
import { useAppDispatch, useAppSelector } from 'store/hooks'

import { fetchProducts } from 'store/slices/productSlice'
import { loadCartFromStorage } from 'store/slices/cartSlice'
import ProductsList from 'components/ProductsList'
import ShoppingCart from './components/ShoppingCart'
import { getUnique } from 'utils'
import { Product } from 'types/product'
import ProductsFilter from 'components/ProductsFilter'
import Loading from 'components/Loading'

function App() {
  const dispatch = useAppDispatch()
  const products = useAppSelector((state) => state.products.items)
  const isLoading = useAppSelector((state) => state.products.loading)
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])

  useEffect(() => {
    dispatch(fetchProducts()).then((result) => {
      if (result.payload && Array.isArray(result.payload)) {
        setFilteredProducts(result.payload as Product[])
      }
    })
    dispatch(loadCartFromStorage())
  }, [dispatch])

  const handleFilter = useCallback((filtered: Product[]) => {
    setFilteredProducts(filtered)
  }, [])

  return (
    <div className="relative bg-white">
      <div className="flex flex-col h-screen w-full">
        <div className="mb-8 sticky top-0 text-center shadow-md bg-white z-10 py-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Productos Disponibles
          </h2>
          <p className="text-gray-600">
            Nuestros mejores productos y servicios financieros
          </p>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 ">
          <div className="w-full py-5 pb-20">
            <ProductsFilter
              categories={getUnique(products.map((p) => p.category))}
              products={products}
              onFilter={handleFilter}
            />

            {isLoading ? (
              <Loading />
            ) : (
              <ProductsList products={filteredProducts} />
            )}
          </div>
        </div>

        <ShoppingCart />
      </div>
    </div>
  )
}

export default App
