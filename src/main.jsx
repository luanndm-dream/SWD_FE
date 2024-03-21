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
import BusDetailsPage from "./pages/dashboard/bus/bus-details/page.jsx"
import OrderDetails from "./pages/dashboard/order/components/OrderDetails.jsx"
import NotProccessList from './pages/dashboard/order/components/NotProccessList.jsx';
import OfficeDetails from "./pages/dashboard/office/office-details/page.jsx"
import 'react-toastify/dist/ReactToastify.css';
import ManageStaff from "./pages/dashboard/staff/page.jsx"
import ManageSetting from "./pages/setting/page.jsx"
import CreateStaff from './pages/dashboard/staff/createStaff';
import UpdateStaff from "./pages/dashboard/staff/updateStaff.jsx"


const router = createBrowserRouter([
  {
    path: "/home",
    element: <HomePage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      {

      },
      {
        path: "/dashboard/office",
        element: <OfficeManagementPage />
      },
      {
        path: "/dashboard/office/:id",
        element: <OfficeDetails />
      },
      {
        path: "/dashboard/bus",
        element: <BusManagementPage />
      },
      {
        path: "/dashboard/bus/:id",
        element: <BusDetailsPage />
      },
      {
        path: "/dashboard/order",
        element: <OrderManagementPage />,
        children: [
          {
            path: "/dashboard/order",
            element: <NotProccessList />,
          },
          {
            path: "/dashboard/order/:id",
            element: <OrderDetails />,
          },
        ]
      },
      {
        path: "/dashboard/staff",
        element: <ManageStaff />
      },
      {
        path: "/dashboard/createStaff",
        element: <CreateStaff />
      },
      {
        path: "/dashboard/updateStaff/:id",
        element: <UpdateStaff />
      }
    ]
  },
  {
    path:"/setting",
    element: <ManageSetting />
  },
  {
    path: "/",
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
