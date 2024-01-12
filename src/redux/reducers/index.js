import { userApi } from "../api/user.api";

const reducers = {
  [userApi.reducerPath]: userApi.reducer,
};

export default reducers;
