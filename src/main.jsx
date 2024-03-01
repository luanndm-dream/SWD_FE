import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./index.css"
import HomePage from "./pages/home/index.jsx"
import { store } from "./store/store.ts"
import DashboardLayout from "./components/layout/DashboardLayout.jsx"
import OfficeManagementPage from "./pages/dashboard/office/page.jsx"
import BusManagementPage from "./pages/dashboard/bus/page.jsx"
import OrderManagementPage from "./pages/dashboard/order/page.jsx"
import ErrorPage from "./pages/error/ErrorPage.jsx"
import LoginPage from "@/pages/login"
import BusDetaisPage from "./pages/dashboard/bus/bus-details/page.jsx"
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/",
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/office",
        element: <OfficeManagementPage />
      },
      {
        path: "/bus",
        element: <BusManagementPage />
      },
      {
        path: "/bus/:id",
        element: <BusDetaisPage />
      },
      {
        path: "/order",
        element: <OrderManagementPage />
      }
    ]
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
