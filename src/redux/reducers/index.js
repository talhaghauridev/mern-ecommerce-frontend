import { reviewApi } from "@/redux/api/reviewApi";
import { productApi } from "../api/productApi";
import { userApi } from "../api/userApi";
import { cartReducer } from "./cartReducer";
import { userReducer } from "./userReducer";
import { paymentApi } from "@/redux/api/paymentApi";
import { onlineStatusReducer } from "./onlineStatus";
import { orderApi } from "@/redux/api/orderApi";

const reducers = {
   [userApi.reducerPath]: userApi.reducer,
   [productApi.reducerPath]: productApi.reducer,
   [reviewApi.reducerPath]: reviewApi.reducer,
   [paymentApi.reducerPath]: paymentApi.reducer,
   [orderApi.reducerPath]: orderApi.reducer,
   [userReducer.name]: userReducer.reducer,
   [cartReducer.name]: cartReducer.reducer,
   [onlineStatusReducer.name]: onlineStatusReducer.reducer
};

export default reducers;
