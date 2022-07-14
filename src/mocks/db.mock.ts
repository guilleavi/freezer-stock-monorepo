import { Product } from "types/product"

const productsMock: Array<Product> = [
  {
    name: "Brocoli",
    howLongToFreeze: 3,
    nextToExpireDate: new Date("08/01/22"),
    nextToExpireUnits: 1,
  },
  {
    name: "Chicken",
    howLongToFreeze: 9,
    nextToExpireDate: new Date("08/15/22"),
    nextToExpireUnits: 2,
  },
  {
    name: "Butter",
    howLongToFreeze: 6,
    nextToExpireDate: new Date("08/23/22"),
    nextToExpireUnits: 3,
  },
]

export { productsMock }
