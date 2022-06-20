import { Product } from "./product"

enum ProductActions {
  GET_PRODUCT = "GET_PRODUCT",
  TYPE_PRODUCT = "TYPE_PRODUCT",
}

type ProductState = {
  typedProductName: string
  product: Product
}

type GetProductAction = {
  type: ProductActions.GET_PRODUCT
  payload: Product
}

type TypeProductAction = {
  type: ProductActions.TYPE_PRODUCT
  payload: string
}

type ProductAction = GetProductAction | TypeProductAction

export { ProductActions }
export type { ProductState, ProductAction }
