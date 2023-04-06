import { render, screen } from '@testing-library/react'

import Products from './index'

import * as hooks from './hooks'

import locales from '../../locales/common.json'

import { mockProduct } from '../../__mocks__'

jest.mock('./hooks', () => ({
  useProducts: jest.fn(() => ({
    isLoading: false,
    error: null,
    products: []
  }))
}))

describe('Products', () => {
  test('renders the product grid', () => {
    jest
      .spyOn(hooks, 'useProducts')
      .mockReturnValueOnce({ isLoading: false, error: null, products: [mockProduct] })
    render(<Products />)
    const productGrid = screen.getByTestId('grid')
    expect(productGrid).toBeInTheDocument()
    const productCards = screen.getAllByTestId('card')
    expect(screen.queryByText(locales.products.noProducts)).not.toBeInTheDocument()
    expect(productCards).toHaveLength(1)
  })

  it('renders loading spinner while products are loading', () => {
    jest
      .spyOn(hooks, 'useProducts')
      .mockReturnValueOnce({ isLoading: true, error: null, products: [] })
    render(<Products />)
    expect(document.querySelector('.spinner')).toBeInTheDocument()
  })

  it('renders "No products found" text if there are no products', () => {
    jest
      .spyOn(hooks, 'useProducts')
      .mockReturnValueOnce({ isLoading: false, error: null, products: [] })

    render(<Products />)
    expect(screen.getByText(locales.products.noProducts)).toBeInTheDocument()
  })
})
