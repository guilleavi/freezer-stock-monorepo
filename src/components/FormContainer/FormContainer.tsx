import CurrentStatus from 'components/CurrentStatus/CurrentStatus'
import ForceDate from 'components/ForceDate/ForceDate'
import InputControllers from 'components/InputControllers/InputControllers'
import Typeahead from 'components/Typeahead/Typeahead'
import React from 'react'

const FormContainer = () => {
  return (
    <div className="form-container">
      <Typeahead />
      <CurrentStatus />
      <ForceDate />
      <InputControllers />
      <div className="submit-button"></div>
    </div>
  )
}

export default FormContainer
