import { render } from '@testing-library/react'

import Image from './index'

import defaultImage from '../../assets/images/no-image.webp'

describe('Image', () => {
  it('renders an image with a default width and height', () => {
    const { getByAltText } = render(<Image alt="test image" />)
    const image = getByAltText('test image')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('width', '80rem')
    expect(image).toHaveAttribute('height', '45rem')
  })

  it('renders an image with the given src, alt, width, and height', () => {
    const { getByAltText } = render(
      <Image src="https://example.com/image.jpg" alt="test image" width="100rem" height="50rem" />
    )
    const image = getByAltText('test image')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', 'https://example.com/image.jpg')
    expect(image).toHaveAttribute('alt', 'test image')
    expect(image).toHaveAttribute('width', '100rem')
    expect(image).toHaveAttribute('height', '50rem')
  })

  it('renders the default image when the given image src is invalid', () => {
    const { getByAltText } = render(<Image src="" alt="test image" />)
    const image = getByAltText('test image')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', defaultImage)
  })
})
