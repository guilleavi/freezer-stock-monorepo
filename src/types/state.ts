import { Product, ProductItem } from "./product"

enum ProductActions {
  GET_PRODUCT = "GET_PRODUCT",
  TYPE_PRODUCT = "TYPE_PRODUCT",
  UPDATE_HOW_MANY_MONTHS_FREEZE = "UPDATE_HOW_MANY_MONTHS_FREEZE",
  UPDATE_STORAGE_DATE = "UPDATE_STORAGE_DATE",
  UPDATE_UNITS_TO_STORAGE = "UPDATE_UNITS_TO_STORAGE",
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

type UpdateHowManyMonthsFreezeAction = {
  type: ProductActions.UPDATE_HOW_MANY_MONTHS_FREEZE
  payload: number
}

type UpdateStorageDateAction = {
  type: ProductActions.UPDATE_STORAGE_DATE
  payload: string
}

type UpdateUnitsToStorageAction = {
  type: ProductActions.UPDATE_UNITS_TO_STORAGE
  payload: number
}

type ProductAction =
  | GetProductAction
  | TypeProductAction
  | UpdateHowManyMonthsFreezeAction
  | UpdateStorageDateAction
  | UpdateUnitsToStorageAction

export { ProductActions }
export type { ProductState, ProductAction }
