import { PropsWithChildren } from "react"
import { ProductProvider } from "components/Context/ProductProvider"

const Container = ({ children }: PropsWithChildren) => (
  <div className="container">
    <ProductProvider>{children}</ProductProvider>
  </div>
)

export default Container
