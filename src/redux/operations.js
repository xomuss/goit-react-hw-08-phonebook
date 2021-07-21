import toggleModalWindowAction from './actions';

export const toggleModal = () => dispatch => {
  dispatch(toggleModalWindowAction());
};
