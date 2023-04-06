import { render } from '@testing-library/react'

import ErrorMessage from './index'

describe('ErrorMessage', () => {
  it('renders error message', () => {
    const errorMessage = 'This is an error message'
    const { getByText } = render(<ErrorMessage message={errorMessage} />)
    const errorElement = getByText(errorMessage)
    expect(errorElement).toBeInTheDocument()
  })

  it('has correct aria-label', () => {
    const errorMessage = 'This is an error message'
    const { getByLabelText } = render(<ErrorMessage message={errorMessage} />)
    const errorElement = getByLabelText(`Error: ${errorMessage}`)
    expect(errorElement).toBeInTheDocument()
  })
})
