import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  day: "",
  month: "",
  year: "",
  age: null,
  errors: {},
};

const BirthdaySlice = createSlice({
  name: "birthday",
  initialState,
  reducers: {
    setDay: (state, action) => {
      state.day = action.payload;
    },
    setMonth: (state, action) => {
      state.month = action.payload;
    },
    setYear: (state, action) => {
      state.year = action.payload;
    },
    setAge: (state, action) => {
      state.age = action.payload;
    },
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
  },
});

export const {
  setDay,
  setMonth,
  setYear,
  setAge,
  setErrors,
} = BirthdaySlice.actions;
export default BirthdaySlice.reducer;
