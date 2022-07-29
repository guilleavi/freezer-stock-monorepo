import CurrentStatus from "components/CurrentStatus/CurrentStatus"
import StorageDate from "components/StorageDate/StorageDate"
import UnitsController from "components/UnitsController/UnitsController"
import { ProductContext } from "contexts/ProductProvider"
import { useContext } from "react"

const ProductContent = () => {
  const {
    state: {
      storagedProduct: { name, howLongToFreeze },
    },
  } = useContext(ProductContext)
  if (!name) {
    return null
  }

  if (!howLongToFreeze) {
    return <div>No data</div>
  }

  return (
    <>
      <CurrentStatus />
      <StorageDate />
      <UnitsController />
    </>
  )
}

export default ProductContent
