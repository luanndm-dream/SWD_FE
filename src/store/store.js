import { configureStore } from "@reduxjs/toolkit"
import counterSlice from "./feature/counterSlice"
import orderListSlice from "./feature/orderListSlice"
import currenUserReducer from "./feature/currentUserSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    orderList: orderListSlice,
    currentUser: currenUserReducer
  }
})
