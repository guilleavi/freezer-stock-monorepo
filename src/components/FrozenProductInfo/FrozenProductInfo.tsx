import ExpiringNextInfo from "components/ExpiringNextInfo/ExpiringNextInfo"
import HowLongInfo from "components/HowLongInfo/HowLongInfo"
import { ProductContext } from "contexts/ProductProvider"
import { useContext } from "react"
import { Link } from "react-router-dom"

const FrozenProductInfo = () => {
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
      <HowLongInfo howLongToFreeze={howLongToFreeze} />
      {nextToExpireUnits ? (
        <>
          {" "}
          <ExpiringNextInfo
            name={name}
            nextToExpireDate={nextToExpireDate}
            nextToExpireUnits={nextToExpireUnits}
          />
          <Link to="details">See Stock Details</Link>{" "}
        </>
      ) : null}
    </div>
  )
}

export default FrozenProductInfo
