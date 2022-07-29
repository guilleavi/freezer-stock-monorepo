import { ProductContext } from "contexts/ProductProvider"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { pluralize, pluralizeToBe } from "utils/strings"

const CurrentStatus = () => {
  const {
    state: {
      storagedProduct: {
        howLongToFreeze,
        name,
        nextToExpireDate,
        nextToExpireUnits,
      },
    },
  } = useContext(ProductContext)

  return (
    <div
      className="current-status"
      style={{ border: "1px solid gray", padding: "5px" }}
    >
      <div>How long can you freeze it?</div>
      <div>{howLongToFreeze} months</div>
      <div>
        {nextToExpireUnits} {pluralize("Unit", nextToExpireUnits)} of {name}{" "}
        {pluralizeToBe(nextToExpireUnits)} expiring on{" "}
        {/* TODO: calculate on days/months how long to expire */}
        {nextToExpireDate.toDateString()}
      </div>
      <div>
        <Link to="details">See Stock Details</Link>
      </div>
    </div>
  )
}

export default CurrentStatus
