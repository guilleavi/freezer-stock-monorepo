import axios from "axios"
import {
  Product,
  NewProduct,
  ProductToSave,
  ProductDetails,
} from "types/product"
import { safeFetch } from "utils/fetch"

interface GetProduct {
  abortSignal: AbortSignal
  name: string
}

const getProduct = async ({
  abortSignal,
  name,
}: GetProduct): Promise<Product> =>
  name
    ? await safeFetch<Product>({
        abortSignal,
        defaultValue: new NewProduct(name),
        url: `http://localhost:3000/products/${name}`,
      })
    : new NewProduct("")

const getProductDetails = async ({
  abortSignal,
  name,
}: GetProduct): Promise<Array<ProductDetails>> =>
  await axios.get(`http://localhost:3000/products/intances/${name}`, {
    signal: abortSignal,
  })

const saveProduct = async (newProductItem: ProductToSave) => {
  const postStatus = await axios.post(
    `http://localhost:3000/products/${newProductItem.name}`,
    newProductItem,
  )
  console.log(postStatus)
}

export { getProduct, getProductDetails, saveProduct }
