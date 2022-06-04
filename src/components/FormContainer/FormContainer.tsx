import CurrentStatus from 'components/CurrentStatus/CurrentStatus'
import ForceDate from 'components/ForceDate/ForceDate'
import InputControllers from 'components/InputControllers/InputControllers'
import Typeahead from 'components/Typeahead/Typeahead'
import React, { useCallback, useEffect, useState } from 'react'
import { getProduct } from 'services/products'
import { Product } from 'types/product'

const FormContainer = () => {
  const [typedValue, setTypedValue] = useState<string>('')
  const [product, setProduct] = useState<Product>()

  const fetchProduct = useCallback(
    async (isSubscribed: boolean) => {
      const fetchedProduct = await getProduct(typedValue)
      if (isSubscribed) {
        setProduct(fetchedProduct)
      }
    },
    [typedValue],
  )

  useEffect(() => {
    let isSubscribed = true

    fetchProduct(isSubscribed).catch((err) => console.error(err))

    return () => {
      // TODO: when I switch to a real fetch I have to implement
      // a cleanup process to abort the previos fetch
      isSubscribed = false
    }
  }, [fetchProduct])

  return (
    <div className="form-container" style={{ maxWidth: '200px' }}>
      <Typeahead setTypedValue={setTypedValue} />
      {product && <CurrentStatus product={product} />}
      <ForceDate />
      <InputControllers />
      <div className="submit-button"></div>
    </div>
  )
}

export default FormContainer
