import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import type { CartItem, CartState } from '../../types/cart'
import { CART_STORAGE_KEY } from 'utils/constants'

const initialState: CartState = {
  items: []
}

export const loadCartFromStorage = createAsyncThunk(
  'cart/loadFromStorage',
  async () => {
    const $CartData = localStorage.getItem(CART_STORAGE_KEY)
    return $CartData ? JSON.parse($CartData) : []
  }
)

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const exist = state.items.find((item) => item.id === action.payload.id)
      if (exist) {
        exist.quantity += action.payload.quantity
      } else {
        state.items.push(action.payload)
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    clearCart: (state) => {
      state.items = []
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loadCartFromStorage.fulfilled, (state, action) => {
      state.items = action.payload
    })
  }
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions
export default cartSlice.reducer
