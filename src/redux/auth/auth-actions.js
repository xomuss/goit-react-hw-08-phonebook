import { createAction } from '@reduxjs/toolkit';

export const toggleModalWindowAction = createAction('modal/toggle');

export const registerRequest = createAction('auth/registerRequest');
export const registerSucces = createAction('auth/registerSucces');
export const registerError = createAction('auth/registerError');

const loginRequest = createAction('auth/loginRequest');
const loginSucces = createAction('auth/loginSucces');
const loginError = createAction('auth/loginError');

const logoutRequest = createAction('auth/logoutRequest');
const logoutSucces = createAction('auth/logoutSucces');
const logoutError = createAction('auth/logoutError');

const getCurrentUserRequest = createAction('auth/getCurrentUserRequest');
const getCurrentUserSucces = createAction('auth/getCurrentUserSucces');
const getCurrentUserError = createAction('auth/getCurrentUserError');
