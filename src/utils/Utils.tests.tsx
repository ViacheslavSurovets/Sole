import { render } from '@testing-library/react'
import { AxiosError } from 'axios'

import { formatAmount } from './format-ammount'
import { handleRequestError } from './handle-request-error'

describe('formatAmount', () => {
  it('formats the amount and currency correctly', () => {
    const amount = 100
    const currency = 'USD'
    const formattedAmount = formatAmount({ amount, currency })
    const { getByText } = render(<div>{formattedAmount}</div>)
    expect(getByText('$100.00')).toBeInTheDocument()
  })
})

describe('handleRequestError', () => {
  it('throws the provided error', () => {
    const error = new Error('Something went wrong')
    expect(() => handleRequestError(error as AxiosError)).toThrow(error)
  })
})
