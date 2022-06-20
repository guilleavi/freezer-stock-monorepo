import { ProductContext } from "components/Context/ProductProvider"
import React, { useContext } from "react"
import { ProductActions } from "types/state"

const ProductTypeahead = () => {
  const { dispatch } = useContext(ProductContext)

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement> & { target: HTMLInputElement },
  ) => {
    if (event.key === "Enter") {
      dispatch({
        type: ProductActions.TYPE_PRODUCT,
        payload: event.target.value,
      })
    }
  }

  // TODO: convert in a typeahead
  return <input type="text" onKeyDown={handleKeyDown} />
}

export default ProductTypeahead
