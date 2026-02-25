import { useAppDispatch, useAppSelector } from 'store/hooks'
import { addToCart, removeFromCart } from 'store/slices/cartSlice'
import { ProductCardProps } from 'types/product'

export default function ProductCard({
  id,
  title,
  price,
  image,
  category,
  isInCart
}: ProductCardProps) {
  const dispatch = useAppDispatch()
  const products = useAppSelector((state) => state.products.items)

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(id))
  }

  const handleAddToCart = () => {
    const product = products.find((p) => p.id === id)
    if (product) {
      dispatch(
        addToCart({
          ...product,
          quantity: 1
        })
      )
    }
  }

  return (
    <div
      className={`bg-red-50 relative overflow-hidden flex flex-col border-2 rounded-sm ${
        isInCart ? 'opacity-50' : 'border-transparent'
      } shadow-md group`}
    >
      <div className="relative w-full h-28 bg-gradient-to-br bg-white flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      <div className="p-4 flex flex-col h-[140px]">
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-gray-900 line-clamp-2">
            {title}
          </h3>
          <p className="text-xs text-gray-500">{category}</p>
          {price ? (
            <>
              <hr className="my-2" />
              <p className="text-xs">
                {' '}
                Desde <span className="font-semibold">S/ {price}</span>
              </p>
            </>
          ) : (
            ''
          )}
        </div>

        {!isInCart ? (
          <button
            onClick={() => handleAddToCart()}
            className="w-full mt-3 bg-[#ff090c] text-white py-2 rounded-sm text-xs font-semibold"
          >
            Agregar
          </button>
        ) : (
          <button
            onClick={() => handleRemoveFromCart()}
            className="w-full mt-3 bg-white text-[#ff090c] py-2 rounded-sm text-xs font-semibold"
          >
            Eliminar del Carrito
          </button>
        )}
      </div>
    </div>
  )
}
