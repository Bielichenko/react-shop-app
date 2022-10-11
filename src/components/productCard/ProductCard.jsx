/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
import React, { useContext, useState } from 'react';
import classNames from 'classnames';

import { Context } from '../../context';
import { checkIsSelected } from '../../functions';

// import { ProductCardComponent } from './ProductCardComponent';

export const ProductCard = ({ product, imageType }) => {
  const [isSelected, setIsSelected] = useState(checkIsSelected(product));
  const { rerender, setForseRerender } = useContext(Context);

  const togleProduct = () => {
    setIsSelected(!isSelected);

    if (!isSelected) {
      const updatedFavoritesStorage = [...JSON.parse(localStorage.getItem('favoritesStorage')), product];

      localStorage.setItem('favoritesStorage', JSON.stringify(updatedFavoritesStorage));
    }

    if (isSelected) {
      const prevFavoritesStorage = JSON.parse(localStorage.getItem('favoritesStorage'));

      const updatedFavoritesStorage = prevFavoritesStorage
        .filter(productItem => productItem.title !== product.title);

      localStorage.setItem('favoritesStorage', JSON.stringify(updatedFavoritesStorage));
    }

    setForseRerender(!rerender);
  };

  return (
    <div className={classNames('productCard', { 'productCard--largeImage': imageType === 'large' })}>
      <img src={product.image} alt="productCard__image" className="productCard__image" />
      <div key={Math.random()} className="">
        {product.title}
      </div>
      <div key={Math.random()} className="">
        {product.price}
      </div>
      <img src="../images/heart-outline.svg" alt="" />
      {
        isSelected
          ? <ion-icon name="heart"></ion-icon>
          : <ion-icon name="heart-outline"></ion-icon>
      }

      <button
        type="button"
        onClick={() => togleProduct()}
        className="product__chooseButton"
      >
        pick up
      </button>
    </div>
  );
};
