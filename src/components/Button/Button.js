import React from 'react';
import clsx from 'clsx';
import css from './Button.module.css';
import { PropTypes } from 'prop-types';

export const Button = ({ handleOnClick }) => {
  return (
    <>
      <button
        className={clsx(css.loadMoreBtn)}
        type="button"
        onClick={handleOnClick}
      >
        <span>Load More</span>
      </button>
    </>
  );
};
Button.propTypes = {
  handleOnClick: PropTypes.func,
};
