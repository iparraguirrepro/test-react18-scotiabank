import { useState } from 'react'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { clearCart, removeFromCart } from 'store/slices/cartSlice'
import ShoppingCartItem from './ShoppingCartItem'
import shoppingCartIcon from 'assets/images/icons/shopping-cart.svg'

export default function ShoppingCart() {
  const dispatch = useAppDispatch()
  const cartItems = useAppSelector((state) => state.cart.items)
  const [showCart, setShowCart] = useState(false)

  const handleRemoveFromCart = (productId: number) => {
    dispatch(removeFromCart(productId))
  }

  const handleClearAll = () => {
    dispatch(clearCart())
  }

  return !showCart ? (
    <button
      onClick={() => setShowCart(true)}
      className="fixed bottom-5 end-5 w-[80px] h-[80px] bg-gray-100 hover:bg-white border-2 border-red-500 rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center"
    >
      <img
        src={shoppingCartIcon}
        alt="Carrito de compras"
        className="w-8 h-8"
      />

      <span className="absolute -top-2 end-0 bg-red-500 text-white border-4 border-white  text-xs rounded-full w-7 h-7 flex items-center justify-center">
        {cartItems.length}
      </span>
    </button>
  ) : (
    <div className="fixed z-50 bg-black/80 top-0 end-0 h-screen w-full flex justify-end">
      <div className="w-[400px] h-full flex flex-col bg-gray-100">
        <div className="bg-white border-gray-200 p-6 flex justify-between items-center">
          <h1 className="text-lg font-bold text-gray-900">
            Carrito de Compras
          </h1>
          <button
            onClick={() => setShowCart(false)}
            className="text-gray-500 hover:text-gray-900 text-2xl"
          >
            ×
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full">
              <p className="text-black text-md">
                No hay productos en tu carrito
              </p>
              <p className="text-gray-400 text-sm">
                Agrega productos para comenzar
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <ShoppingCartItem
                  key={item.id}
                  item={item}
                  onRemove={handleRemoveFromCart}
                />
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="bg-white border-t flex justify-between gap-2 border-gray-200 p-6">
            <button
              onClick={() => setShowCart(false)}
              className="w-full text-sm  bg-[#ff090c] text-white py-2 rounded-sm font-semibold border-2 border-[#ff090c]"
            >
              Continuar
            </button>

            <button
              onClick={() => handleClearAll()}
              className="w-full bg-white text-[#ff090c] py-2  text-sm rounded-sm font-semibold border-2 border-[#ff090c]"
            >
              Vaciar Carrito
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
