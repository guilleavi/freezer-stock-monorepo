import React from "react"
import { createRoot } from "react-dom/client"
import "./styles/index.scss"
import App from "./App"
import { BrowserRouter } from "react-router-dom"

const root = createRoot(document.getElementById("root") as Element)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
