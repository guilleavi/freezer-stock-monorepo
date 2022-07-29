import { ProductContext } from "contexts/ProductProvider"
import { useContext } from "react"
import { saveProduct } from "services/products"

const SaveButton = () => {
  const { state } = useContext(ProductContext)

  const handleOnClick = async (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
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
