import { Product } from './product'

export interface FilterFormProps {
  readonly onFilter: (filtered: Product[]) => void
  readonly categories: string[]
  readonly products: Product[]
}
