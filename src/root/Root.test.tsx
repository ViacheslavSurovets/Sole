import { render, screen } from '@testing-library/react'

import Root from './index'

describe('Root', () => {
  describe('Root', () => {
    it('renders without crashing', () => {
      render(<Root />)
      const headerElement = screen.getByRole('banner')
      const mainElement = screen.getByRole('main')
      expect(headerElement).toBeInTheDocument()
      expect(mainElement).toBeInTheDocument()
    })
  })
})
