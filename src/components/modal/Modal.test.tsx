import { act, fireEvent, render, renderHook } from '@testing-library/react'

import Modal, { useModal } from './index'

import { mockProduct } from '../../__mocks__'

describe('Modal component', () => {
  it('should render the modal component', () => {
    const { getByLabelText, getByTestId } = render(
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      <Modal closeModal={() => {}} ariaLabel="test-modal">
        <p>Test content</p>
      </Modal>
    )
    const modal = getByLabelText('test-modal')
    const closeIcon = getByTestId('close-icon')
    expect(modal).toBeInTheDocument()
    expect(closeIcon).toBeInTheDocument()
  })

  it('should call the closeModal function when the close icon is clicked', () => {
    const closeModalMock = jest.fn()
    const { getByTestId } = render(
      <Modal closeModal={closeModalMock} ariaLabel="test-modal">
        <p>Test content</p>
      </Modal>
    )
    const closeIcon = getByTestId('close-icon')
    fireEvent.click(closeIcon)
    expect(closeModalMock).toHaveBeenCalled()
  })
})

describe('useModal hook', () => {
  it('should return initial state', () => {
    const { result } = renderHook(() => useModal())
    expect(result.current.isModalOpened).toBe(false)
    expect(result.current.modalData).toBe(null)
  })

  it('should update isModalOpened state when calling setIsModalOpened', () => {
    const { result } = renderHook(() => useModal())
    act(() => {
      result.current.setIsModalOpened(true)
    })
    expect(result.current.isModalOpened).toBe(true)
  })

  it('should update modalData state when calling setModalData', () => {
    const { result } = renderHook(() => useModal())

    act(() => {
      result.current.setModalData(mockProduct)
    })
    expect(result.current.modalData).toEqual(mockProduct)
  })

  it('should update isModalOpened state when calling handleModalClose', () => {
    const { result } = renderHook(() => useModal())
    act(() => {
      result.current.handleModalClose()
    })
    expect(result.current.isModalOpened).toBe(false)
  })
})
