import { rest } from "msw"
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
      /*
       * ctx.body(
       *   JSON.stringify({
       *     product: productsMock.find((product) =>
       *       compare(product.name, productName as string),
       *     ),
       *   }),
       * ),
       */
    )
    return test
  }),
]
