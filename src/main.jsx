import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./index.css"
import HomePage from "./pages/home/index.jsx"
import { store } from "./store/store.js"
import DashboardLayout from "./components/layout/DashboardLayout.jsx"
import OfficeManagementPage from "./pages/dashboard/office/page.jsx"
import BusManagementPage from "./pages/dashboard/bus/page.jsx"
import OrderManagementPage from "./pages/dashboard/order/page.jsx"
import ErrorPage from "./pages/error/ErrorPage.jsx"
import LoginPage from "@/pages/login"
import BusDetaisPage from "./pages/dashboard/bus/bus-details/page.jsx"
import OrderDetails from "./pages/dashboard/order/components/OrderDetails.jsx"
import OfficeDetails from "./pages/dashboard/office/office-details/page.jsx"
import 'react-toastify/dist/ReactToastify.css';
import UpdateOffice from "./pages/dashboard/office/components/update-office.jsx"
import StaffPage from "./pages/dashboard/staff/page.jsx"
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
        element: <OfficeManagementPage />,
      },
      {
        path: "/office/:id",
        element: <OfficeDetails />
      },
      {
        path: "/office/update/:id",
        element: <UpdateOffice />
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
        element: <OrderManagementPage />,
      },
      {
        path: "/order/:id",
        element: <OrderDetails />,
      },
      {
        path: "/staff",
        element: <StaffPage />
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
