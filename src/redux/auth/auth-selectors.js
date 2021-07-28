import { createSelector } from '@reduxjs/toolkit';

const getModalState = state => state.auth.modal;

const getIsAuthenticated = state => state.auth.token;

const getUserName = state => state.auth.user.name;

export default { getModalState, getIsAuthenticated, getUserName };
