import { Button, Image, Modal, Text } from '../../../../components'

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
  <Modal
    className="product-modal"
    closeModal={closeModal}
    ariaLabel={`${title} price: ${price} ${discountPrice ? `discount ${discountPrice}` : ''}`}
  >
    {title && <Text>{title}</Text>}
    {brand && <Text>{brand}</Text>}
    {price && currency && <Text>{formatAmount({ currency, amount: price })}</Text>}
    {price && discountPrice && (
      <>
        <Text>{locales.products.productModal.discount}</Text>
        <Text className="product-modal__discount">
          {formatAmount({ currency, amount: discountPrice })}
        </Text>
      </>
    )}
    <Image className="product-modal__image" src={image} alt={title} aria-label={`${title} image`} />
    <Button
      className="product-modal__button"
      onClick={() => window.open(url, '_blank')}
      disabled={!url}
      label={locales.products.productModal.button}
      aria-label={locales.products.productModal.button}
    />
  </Modal>
)

export default ProductModal
