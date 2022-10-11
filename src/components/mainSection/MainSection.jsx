/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import classNames from 'classnames';

import { Context } from '../../context';
import { Catalog } from '../catalog/Catalog';
import {
  filterProductsByCategory,
  findCategories,
  getSelectedProducts,
  makeValidTitle,
} from '../../functions';
import { Navigation } from '../navigation/Navigation';

export const MainSection = ({ products }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(findCategories(products));
  }, [products]);

  return (
    <div className="mainSection">
      <div className="mainSection__navigation">
        <Navigation categories={categories} />
      </div>
      <div className="mainSection__catalog">
        <Routes>
          {categories.map(category => {
            return category !== 'favorites'
              ? (
                <Route
                  key={Math.round()}
                  path={`${category}/*`}
                  element={<Catalog products={filterProductsByCategory(products, category)} category={`${category}`} />}
                />
              )
              : (
                <Route
                  path={`${category}/*`}
                  element={(
                    <Catalog
                      products={getSelectedProducts(products)}
                      category={`${category}`}
                    />
                  )}
                />
              );
          })}
        </Routes>
      </div>
    </div>
  );
};
