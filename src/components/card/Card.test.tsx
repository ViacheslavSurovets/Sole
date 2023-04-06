import { fireEvent, render } from '@testing-library/react'

import Card from './index'

describe('Card', () => {
  it('should display the image', () => {
    const data = { image: 'test.jpg', title: 'Test title' }
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const { getByAltText } = render(<Card data={data} onCardClick={() => {}} />)
    expect(getByAltText(data.title)).toBeInTheDocument()
  })

  it('should call onCardClick function when clicked', () => {
    const data = { image: 'test.jpg', title: 'Test title' }
    const onCardClickMock = jest.fn()
    const { getByRole } = render(<Card data={data} onCardClick={onCardClickMock} />)
    fireEvent.click(getByRole('figure'))
    expect(onCardClickMock).toHaveBeenCalledWith(data)
  })

  it('should remove the fade class after image is loaded', () => {
    const data = { image: 'test.jpg', title: 'Test title' }
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const { getByRole } = render(<Card data={data} onCardClick={() => {}} />)
    const image = getByRole('img')
    expect(image).toHaveClass('card__image_fade')
    image.dispatchEvent(new Event('load'))
    expect(image).not.toHaveClass('card__image_fade')
  })
})
