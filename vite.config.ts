import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig({
  //  tsconfigPaths(): necessary to fix relative path issue in the imports
  plugins: [react(), tsconfigPaths()],
})
