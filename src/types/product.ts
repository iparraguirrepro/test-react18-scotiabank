export interface ProductCardProps {
  readonly id: number
  readonly title: string
  readonly price: number
  readonly image: string
  readonly category: string
  readonly isInCart: boolean
}

export interface Product {
  readonly id: number
  readonly title: string
  readonly price: number
  readonly image: string
  readonly category: string
}

export interface ProductsListProps {
  readonly products: Product[]
}

export interface ProductState {
  items: Product[]
  loading: boolean
  error: string | null
}
