import React, {
  PropsWithChildren,
  createContext,
  useReducer,
  useMemo,
} from "react"
import { Product } from "types/product"
import { ProductAction, ProductActions, ProductState } from "types/state"

const initialState: ProductState = {
  typedProductName: "",
  product: {} as Product,
}

const ProductContext = createContext<{
  state: ProductState
  dispatch: React.Dispatch<ProductAction>
}>({ state: initialState, dispatch: () => null })

const reducer = (state: ProductState, action: ProductAction): ProductState => {
  switch (action.type) {
    case ProductActions.GET_PRODUCT:
      return {
        ...state,
        product: action.payload,
      }
    case ProductActions.TYPE_PRODUCT:
      return {
        ...state,
        typedProductName: action.payload,
      }
    default:
      console.error("Action not implemented")
      // eslint-disable-next-line @typescript-eslint/no-throw-literal
      throw Error
  }
}

const ProductProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const contextValue = useMemo(() => ({ state, dispatch }), [state])
  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  )
}

export { ProductProvider, ProductContext }
