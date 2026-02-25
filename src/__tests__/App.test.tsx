import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { describe, it, expect, vi } from 'vitest'

import { store } from '../store'
import App from '../App'
import * as productService from '../services/productService'
import { Product } from 'types/product'

describe('App', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('Should :: render the title', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )
    expect(screen.getByText('Productos Disponibles')).toBeInTheDocument()
  })

  it('Should :: render the product', async () => {
    const mockProduct: Product = {
      id: 99,
      title: 'Proiducto 99',
      category: 'category',
      image: 'image',
      price: 10000
    }

    vi.spyOn(productService, 'getProducts').mockResolvedValue([mockProduct])

    render(
      <Provider store={store}>
        <App />
      </Provider>
    )

    expect(await screen.findByText(mockProduct.title)).toBeInTheDocument()
  })
})
