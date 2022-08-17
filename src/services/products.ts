import axios from "axios"
import { Product, NewProduct, ProductItem } from "types/product"
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

const saveProduct = async (newProductItem: ProductItem) => {
  const postStatus = await axios.post(
    `localhost:3000/products/${newProductItem.name}`,
  )
  console.log(postStatus)
}

export { getProduct, saveProduct }
