import { SyntheticEvent } from 'react'

import { Image } from '../../components'

import './index.scss'

interface ICard<T> {
  data: T
  onCardClick: (data: T) => void
}

const Card = <T extends { image: string; title: string }>({ data, onCardClick }: ICard<T>) => {
  const { image, title } = data
  const handleLoad = (instance: SyntheticEvent<HTMLImageElement, Event>) =>
    instance.currentTarget.classList.remove('card__image_fade')

  return (
    <figure className="card" onClick={() => onCardClick(data)} data-testid="card">
      <Image
        className="card__image card__image_fade"
        src={image}
        loading="lazy"
        onLoad={handleLoad}
        alt={title}
      />
      <figcaption className="card__label">{title}</figcaption>
    </figure>
  )
}

export default Card
