import { Product } from 'types/product'

export const productsMock: Array<Product> = [
  {
    name: 'Brocoli',
    howLongToFreeze: 3,
    nextToExpireDate: new Date('01/12/22'),
    nextToExpireUnits: 1,
  },
  {
    name: 'Chicken',
    howLongToFreeze: 9,
    nextToExpireDate: new Date('12/10/22'),
    nextToExpireUnits: 2,
  },
  {
    name: 'Butter',
    howLongToFreeze: 6,
    nextToExpireDate: new Date('07/08/22'),
    nextToExpireUnits: 3,
  },
]
