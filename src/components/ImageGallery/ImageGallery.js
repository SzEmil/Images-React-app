import React from 'react';
import css from './ImageGallery.module.css';
import clsx from 'clsx';
import { PropTypes } from 'prop-types';
export const ImageGallery = ({ images, children, onClick }) => {
  const handleOnClick = (event, images) => {
    if (event.target.nodeName !== 'IMG') {
      return;
    }
    const filterImage = images.find(
      image => Number(image.id) === Number(event.target.id)
    );

    return onClick(filterImage);
  };

  return (
    <>
      <ul
        className={clsx(css.gallery)}
        onClick={event => handleOnClick(event, images)}
      >
        {children}
      </ul>
    </>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.object,
    })
  ),
  children: PropTypes.element,
};
