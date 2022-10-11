/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
// import { ClothesListComponent } from './components/ClothesListComponent';

import React, { useEffect, useState, useContext } from 'react';
import {
  NavLink,
  Route,
  Routes,
  useParams,
  useSearchParams,
} from 'react-router-dom';
import { ClothesListComponent } from '../productsList/ProductsList';

import { Context } from '../../context';
import { createPagePagination, getProductsOnPage } from '../../paginationManager';

export const Catalog = ({ products, category }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);
  const [pageNumbers, setPageNumbers] = useState([]);
  const [productsOnPage, setProductsOnPage] = useState(undefined);

  const { rerender, setForseRerender } = useContext(Context);

  useEffect(() => {
    createPagePagination(products, productsPerPage, setPageNumbers);
  }, []);

  useEffect(() => {
    setCurrentPage(JSON.parse(`${localStorage.getItem(`${category}SelectedPage`)}`) || 1);
  }, [category]);

  useEffect(() => {
    getProductsOnPage(products, currentPage, productsPerPage, setProductsOnPage);
  }, [products, currentPage]);

  const setSelectedPage = (pageNumber) => {
    setCurrentPage(pageNumber);
    localStorage.setItem(`${category}SelectedPage`, JSON.stringify(pageNumber));
    setForseRerender(!rerender);
  };

  return (
    <div className="catalog">
      <div className="catalog__productsList">
        {productsOnPage && (
          <Routes>
            {
              pageNumbers.map(number => (
                <Route
                  key={number}
                  path={`${number}`}
                  element={<ClothesListComponent productsOnPage={productsOnPage} />}
                />
              ))
            }
          </Routes>
        )}
      </div>

      <div className="catalog__pagination">
        {pageNumbers.map(number => (
          <>
            <NavLink
              to={`${number}`}
              onClick={() => setSelectedPage(number)}
            >
              {number}
            </NavLink>
          </>
        ))}
      </div>
    </div>
  );
};
