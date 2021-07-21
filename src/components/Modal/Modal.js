import { Component } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';
import getModalState from '../../redux/selectors';
import { toggleModal } from '../../redux/operations';

class Modal extends Component {
  state = {};

  componentDidMount() {
    window.addEventListener('keydown', this.toggleModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.toggleModal);
  }

  toggleModal = evt => {
    console.log(evt);
    if (evt.code === 'Escape') {
      // const value = this.props.modal;
      // console.log(value);
      this.props.modalSwitcher();
    }
  };

  render() {
    return createPortal(
      <div>
        <div className={styles.overlay}>
          <div className={styles.content}>
            <h1>modal</h1>
          </div>
        </div>
      </div>,
      document.getElementById('modal'),
    );
  }
}

export default Modal;
