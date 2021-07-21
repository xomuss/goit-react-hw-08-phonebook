import { combineReducers, createReducer } from '@reduxjs/toolkit';
import toggleModalWindowAction from './actions';

const modalReducer = createReducer(null, {
  [toggleModalWindowAction]: (state, _) => !state,
});

export default combineReducers({
  modalReducer,
});
