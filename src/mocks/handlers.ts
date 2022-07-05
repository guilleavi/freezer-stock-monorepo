import { rest } from "msw"
import { compare } from "utils/strings"
import { productsMock } from "./db.mock"
/*
 * import { productsMock } from "./db.mock"
 * import { compare } from "../utils/strings"
 */

const HTTP_SUCCESS = 200

export const handlers = [
  rest.get("/product/:productName", (req, res, ctx) => {
    const { productName } = req.params
    const test = res(
      ctx.status(HTTP_SUCCESS),
      ctx.json(
        productsMock.find((product) =>
          compare(product.name, productName as string),
        ),
      ),
    )
    return test
  }),
]
