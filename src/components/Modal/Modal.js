import { Component } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

class Modal extends Component {
  state = {};

  componentDidMount() {
    window.addEventListener('keydown', this.closeModalByEsc);
  }

  closeModalByEsc = evt => {
    console.log(evt);
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
