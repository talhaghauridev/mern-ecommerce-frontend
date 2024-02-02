import { reviewApi } from "@redux/api/reviewApi";
import { productApi } from "../api/productApi";
import { userApi } from "../api/userApi";
import { cartReducer } from "./cartReducer";
import { userReducer } from "./userReducer";
import { createSlice } from "@reduxjs/toolkit";

const onlineStatus = createSlice({
  name: "onlineStatus",
  initialState: {
    online: navigator.onLine,
    error:navigator.onLine ? null :"Internet connection error" 
  },
});

const reducers = {
  [userApi.reducerPath]: userApi.reducer,
  [productApi.reducerPath]: productApi.reducer,
  [reviewApi.reducerPath]: reviewApi.reducer,
  [userReducer.name]: userReducer.reducer,
  [cartReducer.name]: cartReducer.reducer,
  [onlineStatus.name]: onlineStatus.reducer,
};

export default reducers;
