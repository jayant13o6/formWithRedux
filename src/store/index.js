import { configureStore } from "@reduxjs/toolkit";

import formSlice from "./form";

const store = configureStore({
  reducer: { form: formSlice.reducer },
});

export default store;
