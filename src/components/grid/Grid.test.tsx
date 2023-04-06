import { render, screen, act, renderHook } from '@testing-library/react'

import { useGrid } from './hooks'

import Grid from './index'

describe('useGrid', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  it('should return all items when visibleItems is not specified', () => {
    const data = [
      { id: '1', image: '', title: 'Product 1' },
      { id: '2', image: '', title: 'Product 2' }
    ]
    const { result } = renderHook(() => useGrid({ data }))
    expect(result.current.gridItems).toEqual(data)
  })

  it('should return the first visibleItems items when visibleItems is specified and there are enough items', () => {
    const data = [
      { id: '1', image: '', title: 'Product 1' },
      { id: '2', image: '', title: 'Product 2' },
      { id: '3', image: '', title: 'Product 3' }
    ]
    const { result } = renderHook(() => useGrid({ data, visibleItems: 2 }))
    expect(result.current.gridItems).toEqual(data.slice(0, 2))
  })

  it('should return all items when visibleItems is specified but there are not enough items', () => {
    const data = [{ id: '1', image: '', title: 'Product 1' }]
    const { result } = renderHook(() => useGrid({ data, visibleItems: 2 }))
    expect(result.current.gridItems).toEqual(data)
  })

  it('should rotate the visible items every 5 seconds when visibleItems is specified and there are enough items', () => {
    const data = [
      { id: '1', image: '', title: 'Product 1' },
      { id: '2', image: '', title: 'Product 2' },
      { id: '3', image: '', title: 'Product 3' }
    ]
    const { result } = renderHook(() => useGrid({ data, visibleItems: 2 }))

    act(() => {
      jest.advanceTimersByTime(5000)
    })

    expect(result.current.gridItems).toEqual(data.slice(2, 4))

    act(() => {
      jest.advanceTimersByTime(5000)
    })

    expect(result.current.gridItems).toEqual(data.slice(0, 2))
  })
})

describe('Grid', () => {
  it('should render all cards when visibleItems is not specified', () => {
    const data = [
      { id: '1', image: '', title: 'Product 1' },
      { id: '2', image: '', title: 'Product 2' }
    ]
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    render(<Grid data={data} onCardClick={() => {}} />)
    expect(screen.getAllByTestId('card')).toHaveLength(2)
  })

  it('should render the first visibleItems cards when visibleItems is specified and there are enough items', () => {
    const data = [
      { id: '1', image: '', title: 'Product 1' },
      { id: '2', image: '', title: 'Product 2' },
      { id: '3', image: '', title: 'Product 3' }
    ]
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    render(<Grid data={data} visibleItems={2} onCardClick={() => {}} />)
    expect(screen.getAllByTestId('card')).toHaveLength(2)
    expect(screen.getByText('Product 1')).toBeInTheDocument()
    expect(screen.getByText('Product 2')).toBeInTheDocument()
  })
})
