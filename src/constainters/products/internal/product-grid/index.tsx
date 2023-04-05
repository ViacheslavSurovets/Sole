import { FC } from 'react'

import { Grid } from '../../../../components'
import { ProductModal } from '../../internal'

import { useModal } from '../../../../components/modal'

import type { IProduct } from '../../../../models/product'
import type { IGrid } from '../../../../components/grid'

type TProductGrid = Omit<IGrid<IProduct>, 'onCardClick'>

const ProductGrid: FC<TProductGrid> = ({ data, visibleItems }) => {
  const { isModalOpened, setModalData, modalData, handleModalClose, setIsModalOpened } = useModal()

  const handleItemClick = <T,>(product: T) => {
    setIsModalOpened(true)
    setModalData(product as IProduct)
  }

  return (
    <>
      <Grid<IProduct> data={data} visibleItems={visibleItems} onCardClick={handleItemClick} />
      {isModalOpened && modalData ? (
        <ProductModal {...modalData} closeModal={handleModalClose} />
      ) : null}
    </>
  )
}

export default ProductGrid
