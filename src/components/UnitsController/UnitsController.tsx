import { useState } from "react"

const UnitsController = () => {
  const [quantity, setQuantity] = useState(0)

  const handleUpdateQuatity = (add: number) => {
    let newQuantity = quantity + add
    newQuantity = newQuantity < 0 ? 0 : newQuantity
    setQuantity(newQuantity)
  }

  return (
    <div>
      <button type="button" onClick={() => handleUpdateQuatity(-1)}>
        -
      </button>
      <span>{quantity}</span>
      <button type="button" onClick={() => handleUpdateQuatity(1)}>
        +
      </button>
    </div>
  )
}

export default UnitsController
