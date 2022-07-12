import { NewProduct, Product } from "types/product"
import { safeFetch } from "utils/fetch"

const getProduct = async (name: string): Promise<Product> =>
  name
    ? await safeFetch({
        schema: Product,
        entityName: "Product",
        url: `/product/${name}`,
        defaultValue: new NewProduct(name),
      })
    : new NewProduct("")

export { getProduct }
