import React from "react"
import { createRoot } from "react-dom/client"
import "./index.scss"
import App from "./App"
import { worker } from "./mocks/browser"

if (process.env["NODE_ENV"] === "development") {
  void worker.start()
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(document.getElementById("root")!)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
