import { useState } from 'react'

import type { IProduct } from '../../models/product'

export const useModal = () => {
  const [isModalOpened, setIsModalOpened] = useState(false)
  const [modalData, setModalData] = useState<IProduct | null>(null)

  const handleModalClose = () => setIsModalOpened(false)

  return { isModalOpened, modalData, handleModalClose, setModalData, setIsModalOpened }
}
