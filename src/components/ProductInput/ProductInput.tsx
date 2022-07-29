import { ProductContext } from "contexts/ProductProvider"
import React, { useContext } from "react"
import { ProductActions } from "types/state"

const ProductInput = () => {
  const { dispatch } = useContext(ProductContext)

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement> & {
      target: HTMLInputElement
    },
  ) => {
    if (event.key === "Enter") {
      dispatch({
        type: ProductActions.TYPE_PRODUCT,
        payload: event.target.value,
      })
    }
  }

  return <input type="text" onKeyDown={handleKeyDown} />
}

export default ProductInput
