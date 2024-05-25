import { configureStore } from "@reduxjs/toolkit";
import BirthdayReducer from "./BrithdaySlice";

const store = configureStore({
  reducer: {
    birthday: BirthdayReducer,
  },
});

export default store;
