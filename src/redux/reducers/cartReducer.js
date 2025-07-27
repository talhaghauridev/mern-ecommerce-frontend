import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { CART_ITEMS, SHIPPING_INFO } from "@/constants/index";
import LocalStorage from "@/utils/LocalStorage";

const initialState = {
  cartItems: LocalStorage.get(CART_ITEMS) || [],
  shippingInfo: LocalStorage.get(SHIPPING_INFO) || {},
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
      if (existingItem) {
        state.cartItems = state.cartItems?.map((i) =>
          i?._id === existingItem?._id ? newItem : i
        );
      } else {
        state.cartItems = [...state.cartItems, newItem];
        toast.success("Item added to cart");
      }
      LocalStorage.set(CART_ITEMS, state.cartItems);
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      state.cartItems = state.cartItems?.filter((item) => item?._id !== id);
      LocalStorage.set(CART_ITEMS, state.cartItems);
    },

    saveShippingInfo: (state, action) => {
      const shippingInfo = action.payload;
      state.shippingInfo = shippingInfo;
      if (shippingInfo) {
        LocalStorage.set(SHIPPING_INFO, shippingInfo);
      }
    },
  },
});

export const { addToCart, removeFromCart, saveShippingInfo } =
  cartReducer.actions;
