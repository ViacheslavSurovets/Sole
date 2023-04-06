import { v4 as uuidv4 } from 'uuid'

import defaultImage from '../assets/images/no-image.webp'

import type { IProduct } from '../models/product'

export const mockProduct: IProduct = {
  id: '123',
  image: 'https://example.com/image.jpg',
  title: 'Product Title',
  url: 'https://example.com/product',
  brand: 'Brand Name',
  price: 100,
  currency: 'USD',
  discountPrice: 90
}
export const getSampleProduct = () => ({
  brand: 'brand',
  currency: 'USD',
  image: defaultImage,
  title: 'title',
  url: 'https://google.com',
  price: 10,
  id: uuidv4(),
  discountPrice: 1
})
