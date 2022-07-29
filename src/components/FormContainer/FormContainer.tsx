import { ProductContext } from "contexts/ProductProvider"
import ProductInput from "components/ProductInput/ProductInput"
import { useCallback, useContext, useEffect } from "react"
import { getProduct } from "services/products"
import { ProductActions } from "types/state"
import SaveButton from "components/SaveButton/SaveButton"
import ProductContent from "components/ProductContent/ProductContent"

const FormContainer = () => {
  const {
    state: {
      newProductItem: { name: selectedProductName },
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

  return (
    <div className="form-container">
      <ProductInput />
      <ProductContent />
      <SaveButton />
    </div>
  )
}

export default FormContainer
