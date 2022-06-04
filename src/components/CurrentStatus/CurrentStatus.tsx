import React from 'react'
import { Product } from 'types/product'
import { pluralize } from 'utils/strings'

type CurrentStatusProps = {
  product: Product
}

const CurrentStatus = ({
  product: { howLongToFreeze, nextToExpireDate, nextToExpireUnits },
}: CurrentStatusProps) => (
  <div
    className="current-status"
    style={{ border: '1px solid gray', padding: '5px' }}
  >
    <div>{howLongToFreeze} months</div>
    <div>{nextToExpireDate.toDateString()}</div>
    <div>
      {nextToExpireUnits} {pluralize('Unit', nextToExpireUnits)}
    </div>
  </div>
)

export default CurrentStatus
