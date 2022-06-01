import React, { PropsWithChildren } from 'react'

const FormContainer = ({ children }: PropsWithChildren<unknown>) => (
  <div className="form-container">
    {children}
    <div className="submit-button"></div>
  </div>
)

export default FormContainer
