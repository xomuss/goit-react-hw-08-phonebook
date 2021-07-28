import { combineReducers, createReducer } from '@reduxjs/toolkit';
import {
  toggleModalWindowAction,
  registerSucces,
  registerError,
  loginSucces,
  loginError,
  logoutSucces,
  logoutError,
} from './auth-actions';

const modal = createReducer(null, {
  [toggleModalWindowAction]: (state, _) => !state,
});

const initialState = { name: null, email: null };

const user = createReducer(initialState, {
  [registerSucces]: (_, { payload }) => payload.user,
  [loginSucces]: (_, { payload }) => payload.user,
  [logoutSucces]: () => initialState,
});

const token = createReducer(null, {
  [registerSucces]: (_, { payload }) => payload.token,
  [loginSucces]: (_, { payload }) => payload.token,
  [logoutSucces]: () => null,
});

const error = createReducer(null, {
  [registerError]: (_, { payload }) => payload,
  [loginError]: (_, { payload }) => payload,
  [logoutError]: (_, { payload }) => payload,
});

export default combineReducers({
  modal,
  user,
  token,
  error,
});
