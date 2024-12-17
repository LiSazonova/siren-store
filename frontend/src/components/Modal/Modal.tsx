'use client';

import React from 'react';
import ReactModal from 'react-modal';
import styles from './Modal.module.css';

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  contentLabel: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onRequestClose,
  contentLabel,
  children,
}) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={contentLabel}
      className={styles.modal}
      overlayClassName={styles.overlay}
      ariaHideApp={false}
    >
      <button
        onClick={onRequestClose}
        className={styles.closeButton}
        aria-label="Закрыть модальное окно"
      >
        &times;
      </button>
      {children}
    </ReactModal>
  );
};

export default Modal;
