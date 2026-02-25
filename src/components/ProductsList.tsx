import { ProductsListProps } from 'types/product'
import ProductCard from './ProductCard'
import { useAppSelector } from 'store/hooks'

export default function ProductsList({ products }: ProductsListProps) {
  const cartItems = useAppSelector((state) => state.cart.items)
  const itemsIds = cartItems.map((item) => item.id)

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            category={product.category}
            isInCart={itemsIds.includes(product.id)}
          />
        ))}
      </div>
    </div>
  )
}
