import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import toastReducer from "./toastSlice";
import { baseApi } from './api';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    toast: toastReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;