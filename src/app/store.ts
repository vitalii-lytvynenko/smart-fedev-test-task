import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { usersSlice } from "../features/users";
import { filtersSlice } from "../features/filters";

const rootReducer = combineSlices({
  users: usersSlice.reducer,
  filters: filtersSlice.reducer
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
