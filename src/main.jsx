import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from "../src/pages/home/index"
import LoginPage from "../src/pages/login/index.jsx"
import ErrorPage from "../src/pages/error/ErrorPage.jsx"
import { Provider } from "react-redux"
import { store } from "./store/store.js"
import "./index.css"
const router = createBrowserRouter([
  {
    path: "/home",
    element: <HomePage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <ErrorPage />
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
)
