import { v4 as uuidv4 } from 'uuid'

import { IProduct } from '../../models/product'

const preloadedImages: { [prop: string]: HTMLImageElement } = {}

const preloadImage = ({ image, id }: IProduct) => {
  const img = new Image()
  img.src = image || ''
  preloadedImages[id] = img
}

export const prepareProductsData = (data: IProduct[]) =>
  data.map(p => {
    const product = {
      ...p,
      id: uuidv4()
    }

    preloadImage(product)

    return product
  })
