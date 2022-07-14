import { NewProduct, Product } from "types/product"
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
        url: `/product/${name}`,
      })
    : new NewProduct("")

export { getProduct }
