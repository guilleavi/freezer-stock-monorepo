import React, { useCallback, useEffect, useState } from "react"

const ForceDate = () => {
  const DATE_LENGTH = 10
  const today = new Date().toISOString().slice(0, DATE_LENGTH)

  const [forceDate, setForceDate] = useState(false)
  const [, setSelectedDate] = useState(today)

  useEffect(() => {
    if (!forceDate) {
      /*
       * By default today's date is the storage date,
       * but you can force a custom one in the case you forget to update the freezer stock at the moment
       */
      setSelectedDate(today)
    }
  }, [forceDate, today])

  const handleCheckboxOnClick = useCallback(() => {
    setForceDate(!forceDate)
  }, [forceDate])

  const handleDateOnChange = useCallback(
    (
      event: React.ChangeEvent<HTMLInputElement> & { target: HTMLInputElement },
    ) => {
      setSelectedDate(event.target.value)
    },
    [],
  )

  return (
    <>
      <div>{`Storage Date ${!forceDate ? today : ""}`}</div>
      <div>
        <input
          type="checkbox"
          checked={forceDate}
          onChange={handleCheckboxOnClick}
        />
        {`Force date`}
        {forceDate ? (
          <input
            type="date"
            disabled={!forceDate}
            defaultValue={today}
            onChange={handleDateOnChange}
          />
        ) : null}
      </div>
    </>
  )
}

export default ForceDate
