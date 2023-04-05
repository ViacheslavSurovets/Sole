import { API } from './config'

import { handleRequestError } from '../utils/handle-request-error'

export const getProducts = () => API('/products').catch(handleRequestError)
