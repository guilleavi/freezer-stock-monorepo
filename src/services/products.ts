import { Product } from 'types/product'
import { productsMock } from './db.mock'

export const getProduct = (name: string): Promise<Product | undefined> => {
  return new Promise((resolve) => {
    resolve(productsMock.find((product) => product.name === name))
  })
}
