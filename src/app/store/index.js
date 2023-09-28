import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

import { authApi } from "@/services/auth";
import userSlice from "../slices/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,

     // Generated Reducers from API
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(
    authApi.middleware,
  ),
})

setupListeners(store.dispatch);