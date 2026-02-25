import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import type { Product, ProductState } from '../../types/product'
import { getProducts } from '../../services/productService'
import { getIconByName } from '../../utils/icons'

const initialState: ProductState = {
  items: [],
  loading: false,
  error: null
}

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const data = await getProducts()
    const productsData = data.map((item: Product) => ({
      ...item,
      image: getIconByName(item.image.split('/').pop()!)
    }))
    return productsData
  }
)

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.items = action.payload
      state.loading = false
      state.error = null
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    addProduct: (state, action: PayloadAction<Product>) => {
      state.items.push(action.payload)
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (product) => product.id !== action.payload
      )
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false
        state.items = action.payload
        state.error = null
      })
  }
})

export const { setProducts, setLoading, addProduct, removeProduct } =
  productSlice.actions
export default productSlice.reducer
