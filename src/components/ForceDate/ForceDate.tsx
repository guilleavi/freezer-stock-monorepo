import React, { useEffect, useState } from "react"

const ForceDate = () => {
  const DATE_LENGTH = 10
  const today = new Date().toISOString().slice(0, DATE_LENGTH)

  const [forceDate, setForceDate] = useState(false)
  const [, setSelectedDate] = useState(today)

  useEffect(() => {
    if (!forceDate) {
      setSelectedDate(today)
    }
  }, [forceDate, today])

  const handleCheckboxOnClick = () => {
    setForceDate(!forceDate)
  }

  const handleDateOnChange = (
    event: React.ChangeEvent<HTMLInputElement> & { target: HTMLInputElement },
  ) => {
    setSelectedDate(event.target.value)
  }

  return (
    <div className="force-date">
      <span>Force date:</span>
      <input
        type="checkbox"
        checked={forceDate}
        onChange={handleCheckboxOnClick}
      />
      {forceDate ? (
        <input
          type="date"
          disabled={!forceDate}
          defaultValue={today}
          onChange={handleDateOnChange}
        />
      ) : (
        <span>{today}</span>
      )}
    </div>
  )
}

export default ForceDate
