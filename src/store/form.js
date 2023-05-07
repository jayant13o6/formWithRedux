import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    email: "",
    query: "",
  },
  reducers: {
    insertFormData(state, action) {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.query = action.payload.query;
    },
  },
});

export const formActions = formSlice.actions;

export default formSlice;
