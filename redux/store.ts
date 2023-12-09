import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import userLogReducer from "./features/userLogSlice"
import { userApi } from "./services/userApi";

export const store = configureStore({
  reducer: {
    counterReducer,
    userLogReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([userApi.middleware]),
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
