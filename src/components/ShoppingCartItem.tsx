import type { ShoppingCartItemProps } from '../types/cart'

export default function ShoppingCartItem({
  item,
  onRemove
}: ShoppingCartItemProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-1 flex items-center gap-4">
      <div className="flex-shrink-0 w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center">
        <img src={item.image} alt={item.title} className="w-12 h-12" />
      </div>

      <div className="w-full flex justify-between">
        <div className="flex flex-col">
          <h3 className="text-sm font-semibold text-gray-900">{item.title}</h3>
          <p className="text-xs font-medium text-gray-600">{item.category}</p>
        </div>

        <button
          onClick={() => onRemove(item.id)}
          className="px-3 py-1 text-sm h-10 text-red-600 hover:bg-red-500 hover:text-white rounded transition-colors"
        >
          Eliminar
        </button>
      </div>
    </div>
  )
}
