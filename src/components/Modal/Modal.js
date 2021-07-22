import { Component } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';
import Form from '../Form';

class Modal extends Component {
  state = {};

  componentDidMount() {
    window.addEventListener('keydown', this.toggleModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.toggleModal);
  }

  toggleModal = evt => {
    if (evt.code !== 'Escape') {
      return;
    }
    this.props.modalSwitcher();
  };

  render() {
    return createPortal(
      <div>
        <div className={styles.overlay}>
          <div className={styles.content}>
            <Form />
          </div>
        </div>
      </div>,
      document.getElementById('modal'),
    );
  }
}

export default Modal;
