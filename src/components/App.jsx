import React from 'react';
import { fetchPhoto } from './js/FetchPhoto';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';
import { useState } from 'react';
export const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState('');
  const [modalProp, setModalProp] = useState(null);

  const handleOnSubmit = async searchData => {
    setIsLoading(true);
    setSearch(searchData);

    try {
      const allImages = await fetchPhoto(searchData, 1);
      setImages(allImages);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
      setPageNumber(1);
    }
  };

  const handleOnClick = async () => {
    try {
      const allImages = await fetchPhoto(search, pageNumber + 1);
      setPageNumber(pageNumber + 1);
      setImages(prevImages => [...prevImages, ...allImages]);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleModal = dataModal => {
    setModalProp(dataModal);
  };

  const handleModalClosed = infoClosed => {
    if (infoClosed) {
      setModalProp(null);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Searchbar onSubmit={handleOnSubmit} />
      {error && <p>Oh, something went wrong :c error: {error.message}</p>}
      <ImageGallery onClick={handleModal} images={images}>
        <ImageGalleryItem images={images} isLoading={isLoading} />
      </ImageGallery>
      <Loader isLoading={isLoading} />
      {images.length > 0 ? <Button handleOnClick={handleOnClick} /> : null}
      {modalProp !== null && (
        <Modal
          modalProp={modalProp}
          onKeyDown={handleModalClosed}
          onClick={handleModalClosed}
        />
      )}
    </div>
  );
};
