import React, { PropsWithChildren, createContext, useReducer } from "react"
import { Product, ProductItem } from "types/product"
import { ProductAction, ProductActions, ProductState } from "types/state"

const reducer = (state: ProductState, action: ProductAction): ProductState => {
  switch (action.type) {
    case ProductActions.GET_PRODUCT:
      return {
        ...state,
        storagedProduct: action.payload,
      }
    case ProductActions.TYPE_PRODUCT:
      return {
        ...state,
        newProductItem: { ...state.newProductItem, name: action.payload },
      }
    case ProductActions.UPDATE_HOW_MANY_MONTHS_FREEZE:
      return {
        ...state,
        newProductItem: {
          ...state.newProductItem,
          howManyMonthsFreeze: action.payload,
        },
      }
    case ProductActions.UPDATE_STORAGE_DATE:
      return {
        ...state,
        newProductItem: {
          ...state.newProductItem,
          storageDate: new Date(action.payload),
        },
      }
    case ProductActions.UPDATE_UNITS_TO_STORAGE:
      return {
        ...state,
        newProductItem: {
          ...state.newProductItem,
          units: action.payload,
        },
      }
    default:
      console.error("Action not implemented")
      throw new Error()
  }
}

const initialState: ProductState = {
  storagedProduct: {} as Product,
  newProductItem: {} as ProductItem,
}

const ProductContext = createContext<{
  state: ProductState
  dispatch: React.Dispatch<ProductAction>
}>({ state: initialState, dispatch: () => null })

const ProductProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  )
}

export { ProductProvider, ProductContext }
