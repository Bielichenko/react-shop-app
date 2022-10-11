/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import {
  React,
  useEffect,
  useState,
} from 'react';
import classNames from 'classnames';

import { ProductCard } from '../productCard/ProductCard';

export const ClothesListComponent = ({ productsOnPage }) => {
  const [imageType, setImageType] = useState(JSON.parse(localStorage.getItem('imageType')) || 'mini');

  const setLargeImage = () => {
    const newType = 'large';

    setImageType(newType);
    localStorage.setItem('imageType', JSON.stringify(newType));
  };

  const setSmallImage = () => {
    const newType = 'small';

    setImageType(newType);
    localStorage.setItem('imageType', JSON.stringify(newType));
  };

  return (
    <div className="productsList">
      <div className="container">
        <div className="productsList__displayStyle">
          <button
            className={classNames('productList__button', { 'productList__button--active': imageType === 'large' })}
            onClick={() => {
              setLargeImage();
            }}
            type="button"
          >
            big
          </button>
          <button
            className={classNames('productList__button', { 'productList__button--active': imageType === 'small' })}
            onClick={() => {
              setSmallImage();
            }}
            type="button"
          >
            small
          </button>
        </div>
        <div className="productsList__content">
          {
            (
              productsOnPage.map(product => {
                return (
                  <div key={Math.round()} className="productsList__productCard">
                    <ProductCard
                      key={Math.random()}
                      product={product}
                      imageType={imageType}
                    />
                  </div>

                );
              })
            )
          }
        </div>
      </div>
    </div>
  );
};
