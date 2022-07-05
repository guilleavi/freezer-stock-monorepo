import { z } from "zod"

class NewProduct implements Product {
  name = ""
  howLongToFreeze = 0
  nextToExpireDate = new Date()
  nextToExpireUnits = 0

  constructor(name: string) {
    this.name = name
  }
}

const Product = z.object({
  name: z.string(),
  howLongToFreeze: z.number(),
  nextToExpireDate: z.preprocess((arg) => {
    if (typeof arg === "string" || arg instanceof Date) {
      return new Date(arg)
    }
  }, z.date()),
  nextToExpireUnits: z.number(),
})
type Product = z.infer<typeof Product>

export { NewProduct, Product }
