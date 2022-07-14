import { ProductContext } from "components/Context/ProductProvider"
import CurrentStatus from "components/CurrentStatus/CurrentStatus"
import ForceDate from "components/ForceDate/ForceDate"
import ProductTypeahead from "components/ProductInput/ProductInput"
import { useCallback, useContext, useEffect } from "react"
import { getProduct } from "services/products"
import { ProductActions } from "types/state"

const FormContainer = () => {
  const {
    state: { typedProductName: selectedProductName },
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

  return (
    <div className="form-container" style={{ maxWidth: "200px" }}>
      <ProductTypeahead />
      <CurrentStatus />
      <ForceDate />
      {/* <InputControllers /> */}
      {/* <div className="submit-button"></div> */}
    </div>
  )
}

export default FormContainer
