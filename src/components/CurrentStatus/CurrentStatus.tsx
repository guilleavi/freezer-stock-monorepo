import { ProductContext } from 'components/Context/ProductProvider'
import React, { useContext } from 'react'
import { pluralize } from 'utils/strings'

const CurrentStatus = () => {
  const {
    state: {
      product: { howLongToFreeze, nextToExpireDate, nextToExpireUnits },
    },
  } = useContext(ProductContext)
  return (
    <div
      className="current-status"
      style={{ border: '1px solid gray', padding: '5px' }}
    >
      <div>{howLongToFreeze} months</div>
      {nextToExpireDate && <div>{nextToExpireDate.toDateString()}</div>}
      <div>
        {nextToExpireUnits} {pluralize('Unit', nextToExpireUnits)}
      </div>
    </div>
  )
}

export default CurrentStatus
