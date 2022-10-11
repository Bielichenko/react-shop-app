/* eslint-disable no-restricted-syntax */

export const checkIsSelected = (product) => {
  const favoritesFromStorage = JSON.parse(localStorage.getItem('favoritesStorage'));

  for (const productFromStorage of favoritesFromStorage) {
    if (product.title === productFromStorage.title) {
      return true;
    }
  }

  return false;
};

export const getSelectedProducts = (products) => {
  return products.filter(product => checkIsSelected(product));
};

export const makeValidTitle = (category) => {
  return (category[0].toUpperCase() + category.slice(1)).split('-').join(' ');
};

export const findCategories = (productsArray) => {
  const categoriesArray = ['all', 'favorites'];

  productsArray.forEach(product => {
    const category = product.category.split(' ').join('-');

    if (!categoriesArray.includes(category)) {
      categoriesArray.push(category);
    }
  });

  return categoriesArray;
};

export const filterProductsByCategory = (products, category) => {
  if (category === 'all') {
    return products;
  }

  const categoryInitialName = category.split('-').join(' ');

  return products.filter(product => product.category === categoryInitialName);
};
