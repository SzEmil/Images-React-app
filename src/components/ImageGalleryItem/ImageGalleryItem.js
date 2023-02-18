import React from 'react';
import clsx from 'clsx';
import css from './ImageGalleryItem.module.css';
import { PropTypes } from 'prop-types';

export const ImageGalleryItem = ({ images }) => {
  const handleRenderList = images => (
    <>
      {images.map(image => {
        return (
          <li className={clsx(css.ImageGalleryItem)} key={image.id}>
            <img
              className={clsx(css.ImageGalleryPhoto)}
              src={image.webformatURL}
              alt={'pixabay pic'}
              width={400}
              height={250}
              id={image.id}
            />
          </li>
        );
      })}
    </>
  );

  return <>{images.length > 0 && handleRenderList(images)}</>;
};

ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.object,
    })
  ),
};
