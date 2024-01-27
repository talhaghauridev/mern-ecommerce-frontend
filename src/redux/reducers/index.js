import { productApi } from "../api/productApi";
import { userApi } from "../api/userApi";
import { userSlice } from "./userReducer";

const reducers = {
  [userApi.reducerPath]: userApi.reducer,
  [productApi.reducerPath]:productApi.reducer,
  [userSlice.name]:userSlice.reducer
  
};

export default reducers;
