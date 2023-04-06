import { fireEvent, render } from '@testing-library/react'

import Button from './index'

const label = 'Click me'

describe('Button', () => {
  it('should display the correct label', () => {
    const { getByText } = render(<Button label={label} />)
    expect(getByText(label)).toBeInTheDocument()
  })

  it('should call onClick function when clicked', () => {
    const onClickMock = jest.fn()
    const { getByRole } = render(<Button label={label} onClick={onClickMock} />)
    fireEvent.click(getByRole('button'))
    expect(onClickMock).toHaveBeenCalledTimes(1)
  })

  it('should have additional class name when passed', () => {
    const className = 'additional-class'
    const { getByRole } = render(<Button label={label} className={className} />)
    expect(getByRole('button')).toHaveClass(className)
  })
})
