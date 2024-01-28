import { productApi } from "../api/productApi";
import { userApi } from "../api/userApi";
import { cartReducer } from "./cartReducer";
import { userReducer } from "./userReducer";

const reducers = {
  [userApi.reducerPath]: userApi.reducer,
  [productApi.reducerPath]: productApi.reducer,
  [userReducer.name]: userReducer.reducer,
  [cartReducer.name]: cartReducer.reducer,
};

export default reducers;
