const TODAY = new Date()

export class NewProduct implements Product {
  name = ""
  howLongToFreeze = 0
  nextToExpireDate = TODAY.toDateString()
  nextToExpireUnits = 0

  constructor(name: string) {
    this.name = name
  }
}

export interface Product {
  name: string
  howLongToFreeze: number
  nextToExpireDate: string
  nextToExpireUnits: number
}

export interface ProductDetails {
  name: string
  expirationDate: string
  units: number
}

export interface ProductToSave {
  name: string
  howLongToFreeze: number
  storageDate: string
  units: number
}
