import {
  combineReducers,
  configureStore,
  createReducer,
} from '@reduxjs/toolkit';
import auth from './auth/auth-reducers';

const phonebook = createReducer(null, {});

const rootReduser = combineReducers({
  auth,
  phonebook,
});

export const store = configureStore({
  reducer: rootReduser,
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});
