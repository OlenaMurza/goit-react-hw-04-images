import React, { useState, useEffect } from 'react';
import { Searchbar } from '../components/Searchbar/Searchbar';
import { ImageGallery } from '../components/ImageGallery/ImageGallery';
import { Button } from '../components/Button/Button';
import { Loader } from '../components/Loader/Loader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { fetchImages } from '../components/Services/PixabayAPI';

export function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalHits, setTotalHits] = useState(0);
  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      return;
    }

    setIsLoading(true);

    const fetchData = async () => {
      const { hits, totalHits } = await fetchImages(query, page);

      if (totalHits === 0) {
        toast.error('Nothing was found for your request');
        setIsLoading(false);
        return;
      }

      setImages(prevImages => (page === 1 ? hits : [...prevImages, ...hits]));
      setTotalHits(prevTotalHits =>
        page === 1 ? totalHits - hits.length : prevTotalHits - hits.length
      );
      setIsLoading(false);
    };

    fetchData().catch(error => {
      toast.error(`Oops! Something went wrong! ${error}`);
      setIsLoading(false);
    });
  }, [page, query]);

  const handleQuerySubmit = query => {
    setQuery(query);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <Searchbar onSubmit={handleQuerySubmit} />
      {images && <ImageGallery images={images} />}
      {!!totalHits && <Button onLoadMore={handleLoadMore} />}
      {isloading && <Loader />}

      <ToastContainer autoClose={2000} />
    </>
  );
};
