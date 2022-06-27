import { ProductContext } from "components/Context/ProductProvider"
import CurrentStatus from "components/CurrentStatus/CurrentStatus"
import ProductTypeahead from "components/ProductTypeahead/ProductTypeahead"
import React, { useCallback, useContext, useEffect } from "react"
import { getProduct } from "services/products"
import { ProductActions } from "types/state"

const FormContainer = () => {
  const {
    state: { typedProductName: selectedProductName },
    dispatch,
  } = useContext(ProductContext)

  const fetchProduct = useCallback(
    async (isSubscribed: boolean) => {
      const fetchedProduct = await getProduct(selectedProductName)
      if (isSubscribed) {
        dispatch({
          type: ProductActions.GET_PRODUCT,
          payload: fetchedProduct,
        })
      }
    },
    [dispatch, selectedProductName],
  )

  useEffect(() => {
    let isSubscribed = true

    fetchProduct(isSubscribed).catch((err) => console.error(err))

    return () => {
      /*
       * TODO: when I switch to a real fetch I have to implement
       * a cleanup process to abort the previous fetch
       */
      isSubscribed = false
    }
  }, [fetchProduct, selectedProductName])

  return (
    <div className="form-container" style={{ maxWidth: "200px" }}>
      <ProductTypeahead />
      <CurrentStatus />
      {/* <ForceDate /> */}
      {/* <InputControllers /> */}
      {/* <div className="submit-button"></div> */}
    </div>
  )
}

export default FormContainer
