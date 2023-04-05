import { Button, Modal, Text } from '../../../../components'

import defaultImage from '../../../../assets/images/no-image.webp'

import { formatAmount } from '../../../../utils/format-ammount'

import locales from '../../../../locales/common.json'

import './index.scss'

import type { IProduct } from '../../../../models/product'

const ProductModal = ({
  image,
  title,
  url,
  brand,
  price,
  currency,
  closeModal,
  discountPrice
}: IProduct & { closeModal: () => void }) => (
  <Modal className="product-modal" closeModal={closeModal}>
    {title ? <Text>{title}</Text> : null}
    {brand ? <Text>{brand}</Text> : null}
    {price && currency ? <Text>{formatAmount({ currency, amount: price })}</Text> : null}
    {price && discountPrice ? (
      <>
        <Text>{locales.products.productModal.discount}</Text>
        <Text className="product-modal__discount">
          {formatAmount({ currency, amount: discountPrice })}
        </Text>
      </>
    ) : null}
    <img
      className="product-modal__image"
      src={image || defaultImage}
      alt={title}
      onError={({ currentTarget }) => {
        currentTarget.onerror = null
        currentTarget.src = defaultImage
      }}
    />
    <Button
      className="product-modal__button"
      onClick={() => (window.location.href = url)}
      disabled={!url}
      label={locales.products.productModal.button}
    />
  </Modal>
)

export default ProductModal
