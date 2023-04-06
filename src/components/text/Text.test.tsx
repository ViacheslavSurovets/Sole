import { render } from '@testing-library/react'

import Text from './index'

const label = 'Hello, world!'
const className = 'my-class'
const id = 'my-id'

const { getByText } = render(
  <Text id={id} className={className}>
    {label}
  </Text>
)

const component = getByText(label)

describe('<Text />', () => {
  it('renders children text', () => {
    expect(component).toBeInTheDocument()
  })

  it('adds the given className to the component', () => {
    expect(component).toHaveClass('my-class')
  })

  it('passes through any other props', () => {
    expect(component).toHaveAttribute('id', id)
  })
})
