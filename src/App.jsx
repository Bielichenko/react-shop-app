/* eslint-disable import/named */
/* eslint-disable no-console */
import {
  React,
  useEffect,
  useState,
} from 'react';
import { Context } from './context';

import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { MainSection } from './components/mainSection/MainSection';
import { fetchMovies } from './api';

import './App.scss';

export const App = () => {
  const [products, setProducts] = useState(undefined);
  const [rerender, setForseRerender] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('favoritesStorage')) {
      localStorage.setItem('favoritesStorage', JSON.stringify([]));
    }

    fetchMovies(setProducts);
  }, []);

  return (
    <div className="App">
      <Context.Provider value={{ rerender, setForseRerender }}>
        <Header />
        {products
          ? <MainSection products={products} />
          : <p>Loading</p>}
        <Footer />
      </Context.Provider>
    </div>
  );
};
