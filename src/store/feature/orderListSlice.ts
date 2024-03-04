import { createSlice } from "@reduxjs/toolkit";
import { orderData } from "@/pages/dashboard/order/data/orderData";
const initialState = {
  orderList: orderData,
};

const orderListSlice = createSlice({
  name: "orderList",
  initialState,
  reducers: {
    updateOrderList: (state, action) => {
      state.orderList = action.payload;
    },
  },
});

export const { updateOrderList } = orderListSlice.actions;
export default orderListSlice.reducer;
