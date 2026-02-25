import { Product } from 'types/product'
import { DEFAULT_TIMEOUT, API_URL } from 'utils/constants'

export async function getProducts(
  timeout = DEFAULT_TIMEOUT
): Promise<Product[]> {
  const response = await fetch(API_URL)
  const data = await response.json()

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data)
    }, timeout)
  })
}
