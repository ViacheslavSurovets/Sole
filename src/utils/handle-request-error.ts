import { AxiosError } from 'axios'

export const handleRequestError = (error: AxiosError) => {
  throw error
}
