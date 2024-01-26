import { productApi } from "../api/productApi";
import { userApi } from "../api/userApi";

const reducers = {
  [userApi.reducerPath]: userApi.reducer,
  [productApi.reducerPath]:productApi.reducer
  
};

export default reducers;
