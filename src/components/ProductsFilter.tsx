import { useState, useMemo, useEffect } from 'react'
import { FilterFormProps } from 'types/filter'
import { Product } from 'types/product'

export default function ProductsFilter({
  categories,
  products,
  onFilter
}: FilterFormProps) {
  const [searchName, setSearchName] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

  const filteredProducts = useMemo(() => {
    return products.filter((product: Product) => {
      const matchesName = product.title
        .toLowerCase()
        .includes(searchName.toLowerCase())
      const matchesCategory =
        selectedCategory === '' || product.category === selectedCategory

      return matchesName && matchesCategory
    })
  }, [searchName, selectedCategory, products])

  useEffect(() => {
    onFilter(filteredProducts)
  }, [filteredProducts, onFilter])

  const handleReset = () => {
    setSearchName('')
    setSelectedCategory('')
  }

  return (
    <div className="mb-4">
      <div className="bg-gray-100 rounded-sm shadow-md p-6 mb-3">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Filtrar Productos
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label
              htmlFor="search"
              className="block text-xs font-semibold text-gray-700 mb-2"
            >
              Buscar por nombre
            </label>
            <input
              id="search"
              type="text"
              placeholder="Ej: Crédito, Tarjeta..."
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
              className="w-full px-2 py-1 text-[13px] border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#ff090c] focus:border-transparent transition"
            />
          </div>

          <div>
            <label
              htmlFor="category"
              className="block text-xs font-semibold text-gray-700 mb-2"
            >
              Categoría
            </label>
            <select
              id="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-2 py-1 border text-[13px] border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#ff090c] focus:border-transparent transition bg-white"
            >
              <option value="">Todas las categorías</option>
              {categories.map((category: string) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex mt-2">
          <button
            onClick={handleReset}
            disabled={searchName === '' && selectedCategory === ''}
            className={`px-4 h-7 border-1 border-red-500 text-sm rounded-sm font-semibold ${
              searchName === '' && selectedCategory === ''
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                : 'bg-red-500 text-white'
            }`}
          >
            Limpiar
          </button>
        </div>
      </div>

      <p className="text-sm bg-red-200 p-2 rounded-sm text-red-800">
        <span className="font-semibold">{filteredProducts.length}</span>{' '}
        productos
      </p>
    </div>
  )
}
