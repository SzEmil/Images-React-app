import React from 'react';
import clsx from 'clsx';
import css from './Searchbar.module.css';

export const Searchbar = ({ onSubmit }) => {
  const handleFormOnSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const formInput = form.elements.text.value;
    onSubmit(formInput);
    form.reset();
  };

  return (
    <>
      <header
        style={{
          backgroundColor: 'purple',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <form className={clsx(css.searchForm)} onSubmit={handleFormOnSubmit}>
          <button className={css.searchFormBtn} type="submit">
            <span></span>
          </button>
          <input
            className={clsx(css.searchFormInput)}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="text"
          />
        </form>
      </header>
    </>
  );
};
