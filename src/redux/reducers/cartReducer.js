import { createSlice } from "@reduxjs/toolkit";
import LocalStorage from "@utils/LocalStorage";

const initialState = {
  cartItems: LocalStorage.get("cart") || [],
};

export const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems?.find(
        (i) => i?._id === newItem?._id
      );
      console.log(existingItem);
      if (existingItem) {
        state.cartItems = state.cartItems?.map((i) =>
          i?._id === existingItem?._id ? newItem : i
        );
      } else {
        state.cartItems = [...state.cartItems, newItem];
      }
      LocalStorage.set("cart", state.cartItems);
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      state.cartItems = state.cartItems?.filter((item) => item?._id !== id);
      LocalStorage.set("cart", state.cartItems);
    },
  },
});

export const { addToCart, removeFromCart } = cartReducer.actions;
