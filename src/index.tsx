import React from "react"
import { createRoot } from "react-dom/client"
import "./styles/index.scss"
import App from "./App"
import { worker } from "./mocks/browser"
import { BrowserRouter } from "react-router-dom"

// TODO: remove this when the real API is done
// if (import.meta.env.DEV) {
//   void worker.start()
// }

const root = createRoot(document.getElementById("root") as Element)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
