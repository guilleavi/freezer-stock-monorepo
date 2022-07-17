import { Product, ProductItem } from "./product"

enum ProductActions {
  GET_PRODUCT = "GET_PRODUCT",
  TYPE_PRODUCT = "TYPE_PRODUCT",
  UPDATE_STORAGE_DATE = "UPDATE_STORAGE_DATE",
}

type ProductState = {
  storagedProduct: Product
  newProductItem: ProductItem
}

type GetProductAction = {
  type: ProductActions.GET_PRODUCT
  payload: Product
}

type TypeProductAction = {
  type: ProductActions.TYPE_PRODUCT
  payload: string
}

type UpdateStorageDateAction = {
  type: ProductActions.UPDATE_STORAGE_DATE
  payload: string
}

type ProductAction =
  | GetProductAction
  | TypeProductAction
  | UpdateStorageDateAction

export { ProductActions }
export type { ProductState, ProductAction }
