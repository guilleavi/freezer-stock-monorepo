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

export interface ProductItem {
  name: string
  howManyMonthsFreeze: number
  storageDate: Date
  units: number
}
