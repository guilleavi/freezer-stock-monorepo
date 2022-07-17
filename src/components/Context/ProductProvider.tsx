import React, { PropsWithChildren, createContext, useReducer } from "react"
import { Product } from "types/product"
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
        typedProductName: action.payload,
      }
    case ProductActions.UPDATE_STORAGE_DATE:
      return {
        ...state,
        storageDate: action.payload,
      }
    default:
      console.error("Action not implemented")
      throw new Error()
  }
}

const initialState: ProductState = {
  storagedProduct: {} as Product,
  typedProductName: "",
  storageDate: "",
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
