import axios from 'axios';
import {
  toggleModalWindowAction,
  registerRequest,
  registerSucces,
  registerError,
} from './auth-actions';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const toggleModal = () => dispatch => {
  dispatch(toggleModalWindowAction());
};

export const register = params => async dispatch => {
  dispatch(registerRequest());

  try {
    const response = await axios.post('/users/signup', params);

    dispatch(registerSucces(response.data));
  } catch (error) {
    dispatch(registerError(error));
  }
};
