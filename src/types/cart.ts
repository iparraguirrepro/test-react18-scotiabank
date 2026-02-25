import { Product } from './product'

export interface CartItem extends Product {
  quantity: number
}

export interface CartState {
  items: CartItem[]
}

export interface ShoppingCartItemProps {
  readonly item: CartItem
  readonly onRemove: (productId: number) => void
}
