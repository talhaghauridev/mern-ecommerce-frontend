import { createSlice } from "@reduxjs/toolkit";
import LocalStorage from "@utils/LocalStorage";

const initialState = {
  items: LocalStorage.get("cart") ? LocalStorage.get("cart") : [],
};

const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {},
  },
});

const {} = cartReducer.actions;
