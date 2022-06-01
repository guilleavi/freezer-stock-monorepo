import Container from 'components/Container/Container'
import CurrentStatus from 'components/CurrentStatus/CurrentStatus'
import ForceDate from 'components/ForceDate/ForceDate'
import FormContainer from 'components/FormContainer/FormContainer'
import InputControllers from 'components/InputControllers/InputControllers'
import Typeahead from 'components/Typeahead/Typeahead'
import React from 'react'

const App = () => {
  return (
    <Container>
      <FormContainer>
        <Typeahead />
        <CurrentStatus />
        <ForceDate />
        <InputControllers />
      </FormContainer>
    </Container>
  )
}

export default App
