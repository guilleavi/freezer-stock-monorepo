import { productsMock } from "mocks/db.mock"
import { NewProduct, Product } from "types/product"
import { safeFetch } from "utils/api"
import { compare } from "utils/strings"

const getProduct = async (name: string): Promise<Product> =>
  name
    ? // safeFetch({
      /*
       *     schema: Product,
       *     entity: "Product",
       *     url: `/product/${name}`,
       *     defaultValue: new NewProduct(name),
       *   })
       */
      new Promise((resolve) => {
        resolve(
          productsMock.find((product) => compare(product.name, name)) ??
            new NewProduct(name),
        )
      })
    : new NewProduct("")

export { getProduct }
