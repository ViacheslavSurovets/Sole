import { useEffect, useState } from 'react'

import { getProducts } from '../../services'

import { prepareProductsData } from './utils'

import locales from '../../locales/common.json'

import type { IProduct } from '../../models/product'
import { AxiosResponse } from 'axios'

export const useProducts = () => {
  const [products, setProducts] = useState<IProduct[] | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const getData = () => {
    setIsLoading(true)

    getProducts()
      .then(({ data }: AxiosResponse<IProduct[]>) =>
        setProducts(data.length ? prepareProductsData(data) : data)
      )
      .catch(() => setError(locales.error.common))
      .finally(() => setIsLoading(false))
  }

  useEffect(() => {
    getData()
  }, [])

  return { isLoading, error, products }
}
