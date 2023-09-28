import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const userToken =
  typeof window !== "undefined" && localStorage.getItem("tma-token");
const userData =
  typeof window !== "undefined" && localStorage.getItem("tma-user");
const userAuth =
  typeof window !== "undefined" && localStorage.getItem("tma-auth");
const userBooking =
  typeof window !== "undefined" && localStorage.getItem("tma-booking");
const persistedUserData = userData ? JSON.parse(userData) : null;
const persistedBookings = userBooking
  ? JSON.parse(userBooking)
  : null;
const persistedToken = userToken
  ? localStorage.getItem("tma-token")
  : null;
const persistedAuth = userAuth
  ? localStorage.getItem("tma-auth")
  : null;

const initialState = {
  user: persistedUserData,
  token: persistedToken || null,
  auth: persistedAuth || null,
  booking: persistedBookings || null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData(state, action) {
      localStorage.setItem("tma-user", JSON.stringify(action.payload));
      state.user = action.payload;
    },
    setUserAuthMethod(state, action) {
      localStorage.setItem("tma-auth", JSON.stringify(action.payload));
      state.auth = action.payload;
    },
    setUserBooking(state, action) {
      localStorage.setItem("tma-booking", JSON.stringify(action.payload));
      state.booking = action.payload;
    },
    setUserToken(state, action) {
      state.token = action.payload;
      localStorage.setItem("tma-token", action.payload);
      Cookies.set("tma-token", action.payload, {
        expires: 1,
        sameSite: "strict",
      });
    },
    logout(state) {
      localStorage.removeItem("tma-token");
      localStorage.removeItem("tma-user");
      localStorage.removeItem("tma-auth");
      Cookies.remove("tma-token");
      state.user = null;
    },
  },
});

export const {
  setUserData,
  setUserToken,
  setUserAuthMethod,
  logout,
  setUserBooking,
} = userSlice.actions;
export default userSlice.reducer;
