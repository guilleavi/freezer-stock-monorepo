import { ProductContext } from "contexts/ProductProvider"
import CurrentStatus from "components/CurrentStatus/CurrentStatus"
import StorageDate from "components/StorageDate/StorageDate"
import UnitsController from "components/UnitsController/UnitsController"
import ProductInput from "components/ProductInput/ProductInput"
import { useCallback, useContext, useEffect } from "react"
import { getProduct } from "services/products"
import { ProductActions } from "types/state"
import SaveButton from "components/SaveButton/SaveButton"

const FormContainer = () => {
  const {
    state: {
      newProductItem: { name: selectedProductName },
      storagedProduct: { name, howLongToFreeze },
    },
    dispatch,
  } = useContext(ProductContext)

  const fetchProduct = useCallback(
    async (signal: AbortSignal) => {
      const fetchedProduct = await getProduct({
        name: selectedProductName,
        abortSignal: signal,
      })
      dispatch({
        type: ProductActions.GET_PRODUCT,
        payload: fetchedProduct,
      })
    },
    [dispatch, selectedProductName],
  )

  useEffect(() => {
    const abortController = new AbortController()
    fetchProduct(abortController.signal).catch((err) => console.error(err))

    return () => {
      abortController.abort()
    }
  }, [fetchProduct, selectedProductName])

  const ProductContent = useCallback(() => {
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
  }, [name, howLongToFreeze])

  return (
    <div className="form-container">
      <ProductInput />
      <ProductContent />
      <SaveButton />
    </div>
  )
}

export default FormContainer
