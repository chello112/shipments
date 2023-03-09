import { configureStore } from "@reduxjs/toolkit";
import ordersReducer from "../features/orders/orderSlice";

export const store = configureStore({
  reducer: {
    orders: ordersReducer,
  },
});
