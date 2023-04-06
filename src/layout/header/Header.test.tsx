import { render } from '@testing-library/react'

import Header from './index'

describe('Header', () => {
  it('should render the logo image', () => {
    const { getByAltText } = render(<Header />)
    expect(getByAltText('logo')).toBeInTheDocument()
  })
})
