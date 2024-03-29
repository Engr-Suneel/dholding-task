import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './slices';
import { errorLoggingMiddleware } from '.';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(errorLoggingMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
