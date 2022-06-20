import { NewProduct, Product } from "types/product"
import { compare } from "utils/strings"
import { productsMock } from "./db.mock"

const getProduct = (name: string): Promise<Product> => {
  return new Promise((resolve) => {
    resolve(
      productsMock.find((product) => compare(product.name, name)) ||
        new NewProduct(name),
    )
  })
}

export { getProduct }
