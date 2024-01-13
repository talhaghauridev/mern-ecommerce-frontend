import { userApi } from "../api/userApi";

const reducers = {
  [userApi.reducerPath]: userApi.reducer,
};

export default reducers;
