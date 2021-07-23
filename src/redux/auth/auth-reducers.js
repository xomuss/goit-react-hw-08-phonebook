import { combineReducers, createReducer } from '@reduxjs/toolkit';
import {
  toggleModalWindowAction,
  registerRequest,
  registerSucces,
  registerError,
} from './auth-actions';

const modalReducer = createReducer(null, {
  [toggleModalWindowAction]: (state, _) => !state,
});

const user = createReducer(null, {});

const token = createReducer(null, {});

const error = createReducer(null, {});

export default combineReducers({
  modalReducer,
  user,
  token,
  error,
});
