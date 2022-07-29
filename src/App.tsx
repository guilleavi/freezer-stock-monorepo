import { ProductProvider } from "contexts/ProductProvider"
import HomePage from "pages/HomePage/HomePage"
import StockDetailsPage from "pages/StockDetailsPage/StockDetailsPage"
import { Routes, Route } from "react-router-dom"

const App = () => (
  <ProductProvider>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/details" element={<StockDetailsPage />} />
    </Routes>
  </ProductProvider>
)

export default App
