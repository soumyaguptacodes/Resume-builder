import React from "react"
import ReactDOM from "react-dom/client"
import { AppContextProvider } from "./context/AppContext"
import App from "./App.jsx"
import { Resume } from "./Resume"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ChakraProvider } from "@chakra-ui/react"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/resume",
    element: <Resume />,
  },
])
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <AppContextProvider>
        <RouterProvider router={router} />
      </AppContextProvider>
    </ChakraProvider>
  </React.StrictMode>
)
