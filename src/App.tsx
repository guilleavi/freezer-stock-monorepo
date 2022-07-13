import { ProductProvider } from "components/Context/ProductProvider"
import FormContainer from "components/FormContainer/FormContainer"

const App = () => (
  <ProductProvider>
    <FormContainer />
  </ProductProvider>
)

export default App
