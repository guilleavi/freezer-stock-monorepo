import { ProductProvider } from "contexts/ProductProvider"
import MainPage from "pages/MainPage/MainPage"
import DetailsPage from "pages/DetailsPage/DetailsPage"
import { Routes, Route } from "react-router-dom"

const App = () => (
  <ProductProvider>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/details" element={<DetailsPage />} />
    </Routes>
  </ProductProvider>
)

export default App
