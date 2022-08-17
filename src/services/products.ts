import axios from "axios"
import { NewProduct, Product, ProductItem } from "types/product"
import { safeFetch } from "utils/fetch"

type GetProduct = {
  abortSignal: AbortSignal
  name: string
}

const getProduct = async ({
  abortSignal,
  name,
}: GetProduct): Promise<Product> =>
  name
    ? await safeFetch({
        abortSignal,
        defaultValue: new NewProduct(name),
        entityName: "Product",
        schema: Product,
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
