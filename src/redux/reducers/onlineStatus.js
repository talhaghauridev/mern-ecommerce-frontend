import { store } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";

export const onlineStatusReducer = createSlice({
   name: "onlineStatus",
   initialState: {
      online: navigator.onLine,
      error: navigator.onLine ? null : "Internet connection error"
   },
   reducers: {
      setOnlineStatus: (state, action) => {
         state.online = action.payload;
         state.error = action.payload ? null : "Internet connection error";
      }
   }
});

window.addEventListener("online", () => {
   store.dispatch(onlineStatusReducer.actions.setOnlineStatus(true));
});

window.addEventListener("offline", () => {
   store.dispatch(onlineStatusReducer.actions.setOnlineStatus(false));
});

export const { setOnlineStatus } = onlineStatusReducer.actions;
