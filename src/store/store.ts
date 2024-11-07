import { configureStore } from "@reduxjs/toolkit";
import { floorSlice } from "./floorreducer";
import { roleSlice } from "./rolereducer";

const store =  configureStore({
  reducer: {
    floor: floorSlice.reducer,
    role: roleSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store