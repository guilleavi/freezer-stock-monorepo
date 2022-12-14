import { ProductContext } from "contexts/ProductProvider"
import { useContext } from "react"
import { saveProduct } from "services/products"
import { ProductActions } from "types/state"

const SaveButton = () => {
  const { state, dispatch } = useContext(ProductContext)

  const handleOnClick = async (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    if (!state.newProductItem.howLongToFreeze) {
      dispatch({
        type: ProductActions.UPDATE_HOW_MANY_MONTHS_FREEZE,
        payload: state.storagedProduct.howLongToFreeze,
      })
    }
    console.log(state.newProductItem)
    await saveProduct(state.newProductItem)
  }

  return (
    <div>
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <button type="button" onClick={handleOnClick}>
        Save
      </button>
      <pre>{JSON.stringify(state.newProductItem)}</pre>
    </div>
  )
}

export default SaveButton
