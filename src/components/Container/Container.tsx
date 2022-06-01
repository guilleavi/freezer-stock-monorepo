import React, { PropsWithChildren } from 'react'

const Container = ({ children }: PropsWithChildren<unknown>) => (
  <div className="container">{children}</div>
)

export default Container
