import { render, screen, fireEvent } from '@testing-library/react'

import ProductModal from './index'

import { formatAmount } from '../../../../utils/format-ammount'

import locales from '../../../../locales/common.json'

import { mockProduct } from '../../../../__mocks__'

const closeModal = jest.fn()

describe('ProductModal', () => {
  it('should render correctly', () => {
    render(<ProductModal {...mockProduct} closeModal={closeModal} />)
    const modal = screen.getByTestId('product-modal')
    expect(modal).toBeInTheDocument()

    const title = screen.getByText(mockProduct.title)
    expect(title).toBeInTheDocument()

    const brand = screen.getByText(mockProduct.brand)
    expect(brand).toBeInTheDocument()

    const price = screen.getByText(
      formatAmount({ currency: mockProduct.currency, amount: mockProduct.price })
    )
    expect(price).toBeInTheDocument()

    const discount = screen.getByText(locales.products.productModal.discount)
    expect(discount).toBeInTheDocument()

    const discountPrice = screen.getByText(
      formatAmount({ currency: mockProduct.currency, amount: mockProduct.discountPrice })
    )
    expect(discountPrice).toBeInTheDocument()

    const button = screen.getByLabelText(locales.products.productModal.button)
    expect(button).toBeInTheDocument()
    expect(button).not.toBeDisabled()
  })

  it('should disable button when url is not provided', () => {
    render(<ProductModal {...mockProduct} url="" closeModal={closeModal} />)
    const button = screen.getByLabelText(locales.products.productModal.button)
    expect(button).toBeDisabled()
  })

  it('should call window.open when button is clicked', () => {
    window.open = jest.fn()
    render(<ProductModal {...mockProduct} closeModal={closeModal} />)
    const button = screen.getByLabelText(locales.products.productModal.button)
    fireEvent.click(button)
    expect(window.open).toHaveBeenCalledWith(mockProduct.url, '_blank')
  })
})
