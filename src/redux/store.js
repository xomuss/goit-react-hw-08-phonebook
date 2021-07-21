import { configureStore, createStore } from '@reduxjs/toolkit';
import modalReducer from './reducers';

export const store = configureStore({
  reducer: modalReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});
