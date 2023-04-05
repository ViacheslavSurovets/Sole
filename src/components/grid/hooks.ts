import { useEffect, useState } from 'react'

import type { IGrid } from './index'

let interval: ReturnType<typeof setInterval>

export const useGrid = <T>({ data, visibleItems }: Omit<IGrid<T>, 'onCardClick'>) => {
  const [activeItemId, setActiveItemId] = useState(0)

  const itemsCount = data.length

  useEffect(() => {
    if (visibleItems && itemsCount > visibleItems) {
      interval = setInterval(() => {
        setActiveItemId(prevState => {
          const nextActiveId = prevState + visibleItems
          return nextActiveId >= itemsCount ? 0 : nextActiveId
        })
      }, 5e3)
    }

    return () => window.clearInterval(interval)
  }, [])

  const gridItems = visibleItems ? data.slice(activeItemId, activeItemId + visibleItems) : data

  return { gridItems }
}
