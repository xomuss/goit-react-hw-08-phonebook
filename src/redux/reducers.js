import { combineReducers, createReducer } from '@reduxjs/toolkit';
import toggleModalWindowAction from './actions';

const modalReducer = createReducer(false, {
  [toggleModalWindowAction]: (_, { payload }) => payload,
});

export default combineReducers({
  modalReducer,
});
