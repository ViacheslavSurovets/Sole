import { SyntheticEvent } from 'react'

import defaultImage from '../../assets/images/no-image.webp'

import './index.scss'
interface ICard<T> {
  data: T
  onCardClick: (data: T) => void
}

const Card = <T extends { image: string; title: string }>({ data, onCardClick }: ICard<T>) => {
  const { image, title } = data
  const handleLoad = (instance: SyntheticEvent<HTMLImageElement, Event>) =>
    instance.currentTarget.classList.remove('product__image_fade')

  return (
    <figure className="product" onClick={() => onCardClick(data)}>
      <img
        className="product__image product__image_fade"
        src={image || defaultImage}
        loading="lazy"
        onLoad={handleLoad}
        alt={title}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null // prevents looping
          currentTarget.src = defaultImage
        }}
      />
      <figcaption className="product__label">{title}</figcaption>
    </figure>
  )
}

export default Card
