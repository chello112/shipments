import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const ORDERS_URL = "https://my.api.mockaroo.com/shipments.json?key=5e0b62d0";

const initialState = {
  orders: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

//Get all orders
export const getOrders = createAsyncThunk("orders/getAll", async (_, thunkAPI) => {
  try {
    const response = await axios.get(ORDERS_URL);
    console.log(response.data);
    return [...response.data];
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getOrders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.orders = action.payload;
      })
      .addCase(getOrders.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export default orderSlice.reducer;
