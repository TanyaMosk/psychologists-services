import { useEffect } from 'react';
import { useState } from 'react';
import Modal from 'react-modal';
import sprite from '../../assets/sprite.svg';

export const BasicModalWindom = ({ isOpen, onRequestClose, children }) => {
  const [modalIsOpen, setModalIsOpen] = useState(isOpen);

  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [modalIsOpen]);

  const closeModal = () => {
    setModalIsOpen(false);
    onRequestClose && onRequestClose();
  };

  const customStyles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(18, 20, 23, 0.50)',
      zIndex: 1000,
      overflow: 'auto',
    },

    content: {
      maxWidth: 'fit-content',
      maxHeight: 'fit-content',
      margin: 'auto',
      overflow: 'auto',
      inset: 0,
      border: 'none',
      background: 'none',
      padding: 0,
    },
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      ariaHideApp={false}
      style={customStyles}
    >
      <button type="button" onClick={closeModal}>
        <svg width={14} height={14}>
          <use href={`${sprite}#icon-x`}></use>
        </svg>
      </button>
      {children}
    </Modal>
  );
};
