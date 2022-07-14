import { ProductContext } from "components/Context/ProductProvider"
import { useCallback, useContext } from "react"
import { pluralize, pluralizeToBe } from "utils/strings"

const CurrentStatus = () => {
  const {
    state: {
      product: { howLongToFreeze, name, nextToExpireDate, nextToExpireUnits },
    },
  } = useContext(ProductContext)

  const StatusContent = useCallback(() => {
    if (!name) {
      return null
    }

    if (!howLongToFreeze) {
      return <div>No data</div>
    }

    return (
      <>
        <div>
          <div>How long can you freeze it?</div>
          <div>{howLongToFreeze} months</div>
        </div>
        <div>
          {nextToExpireUnits} {pluralize("Unit", nextToExpireUnits)} of {name}{" "}
          {pluralizeToBe(nextToExpireUnits)} expiring on{" "}
          {/* TODO: calculate on days/months how long to expire */}
          {nextToExpireDate.toDateString()}
        </div>
      </>
    )
  }, [howLongToFreeze, name, nextToExpireDate, nextToExpireUnits])

  return (
    <div
      className="current-status"
      style={{ border: "1px solid gray", padding: "5px" }}
    >
      <StatusContent />
    </div>
  )
}

export default CurrentStatus
