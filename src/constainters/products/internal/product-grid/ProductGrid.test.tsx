import { render, screen, fireEvent } from '@testing-library/react'

import { ProductGrid } from '../../internal'

import { getSampleProduct } from '../../../../__mocks__'

describe('ProductGrid component', () => {
  const mockData = [getSampleProduct(), getSampleProduct(), getSampleProduct()]

  it('should render Grid with provided data', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    render(<ProductGrid data={mockData} visibleItems={3} />)

    const gridElement = screen.getByTestId('grid')
    const cardElements = screen.getAllByTestId('card')

    expect(gridElement).toBeInTheDocument()
    expect(cardElements.length).toBe(mockData.length)
  })

  it('opens the modal when a card is clicked', () => {
    render(<ProductGrid data={mockData} />)
    const firstCard = screen.getAllByTestId('card')[0]
    fireEvent.click(firstCard)
    expect(screen.getByTestId('product-modal')).toBeInTheDocument()
  })

  it('closes the modal when the close button is clicked', () => {
    render(<ProductGrid data={mockData} />)
    const firstCard = screen.getAllByTestId('card')[0]
    fireEvent.click(firstCard)
    const closeButton = screen.getByTestId('close-icon')
    fireEvent.click(closeButton)
    expect(screen.queryByTestId('product-modal')).not.toBeInTheDocument()
  })
})
