import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "./App.tsx"
import "./index.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename={process.env.NODE_ENV === 'production' ? '/todo' : '/'}>
      <Routes>
        <Route path='/'> {<App />}</Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
