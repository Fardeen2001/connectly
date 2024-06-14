"use client";
import { configureStore } from "@reduxjs/toolkit";
import auth from "./reducers/auth";

const store = configureStore({
  reducer: {
    auth: auth,
  },
});
export default store;
