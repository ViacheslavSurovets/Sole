import { Card } from '../index'

import { useGrid } from './hooks'

import './index.scss'

export interface IGrid<T> {
  data: T[]
  visibleItems?: number
  onCardClick: TOnCardClick
}

type TOnCardClick = <T>(product: T) => void

const Grid = <T extends Record<'id' | 'image' | 'title', string>>({
  data,
  visibleItems,
  onCardClick
}: IGrid<T>) => {
  const { gridItems } = useGrid({ data, visibleItems })

  return (
    <div className="grid">
      {gridItems.map(p => (
        <Card<T> key={p.id} data={p} onCardClick={onCardClick} />
      ))}
    </div>
  )
}

export default Grid
