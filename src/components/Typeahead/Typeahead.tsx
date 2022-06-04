import React from 'react'

type TypeaheadProps = {
  setTypedValue: (typedValue: string) => void
}

const Typeahead = ({ setTypedValue }: TypeaheadProps) => {
  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement> & { target: HTMLInputElement },
  ) => {
    if (event.key === 'Enter') {
      setTypedValue(event.target.value)
    }
  }

  return <input type="text" onKeyDown={handleKeyDown} />
}

export default Typeahead
