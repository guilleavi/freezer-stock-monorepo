import { ProductProvider } from "components/Context/ProductProvider"
import React, { PropsWithChildren } from "react"

const Container = ({ children }: PropsWithChildren<unknown>) => (
  <div className="container">
    <ProductProvider>{children}</ProductProvider>
  </div>
)

export default Container
