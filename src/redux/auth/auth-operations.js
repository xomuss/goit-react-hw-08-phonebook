import toggleModalWindowAction from './auth-actions';

const toggleModal = () => dispatch => {
  dispatch(toggleModalWindowAction);
};

export default {
  toggleModal,
};
