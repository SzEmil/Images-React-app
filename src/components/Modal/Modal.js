import React from 'react';
import clsx from 'clsx';
import css from './Modal.module.css';
import { PropTypes } from 'prop-types';
import { useEffect, useCallback } from 'react';

export const Modal = ({ modalProp, onClick, onKeyDown }) => {
  const handleModalCLick = event => {
    if (event.target.nodeName !== 'IMG') {
      return onClick(true);
    } else {
      return;
    }
  };

  const handleCloseModal = useCallback(
    event => {
      if (event.code === 'Escape') {
        return onKeyDown(true);
      }
    },
    [onKeyDown]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleCloseModal);

    return () => {
      document.removeEventListener('keydown', handleCloseModal);
    };
  }, [handleCloseModal]);

  return (
    <>
      <div className={clsx(css.overlay)} onClick={handleModalCLick}>
        <div className={clsx(css.modal)} onKeyDown={handleCloseModal}>
          <img src={modalProp.largeImageURL} alt="pixabay pic" />
        </div>
      </div>
    </>
  );
};
Modal.propTypes = {
  modalProp: PropTypes.object,
};
