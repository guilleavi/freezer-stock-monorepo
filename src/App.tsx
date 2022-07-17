import { ProductProvider } from "contexts/ProductProvider"
import FormContainer from "components/FormContainer/FormContainer"

const App = () => (
  <ProductProvider>
    <FormContainer />
  </ProductProvider>
)

export default App
