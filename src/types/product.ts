type Product = {
  name: string
  howLongToFreeze: number
  nextToExpireDate: Date
  nextToExpireUnits: number
}

class NewProduct implements Product {
  name = ''
  howLongToFreeze = 0
  nextToExpireDate = new Date()
  nextToExpireUnits = 0

  constructor(name: string) {
    this.name = name
  }
}

export { NewProduct }
export type { Product }
