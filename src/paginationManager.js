/* eslint-disable no-console */
export const createPagePagination = (
  products,
  productsPerPage,
  setPageNumbers,
) => {
  const pagePaginationNumbers = [];

  for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i += 1) {
    pagePaginationNumbers.push(i);
  }

  setPageNumbers(pagePaginationNumbers);
};

export const getProductsOnPage = (
  products,
  currentPage,
  productsPerPage, setProductsOnPage,
) => {
  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;

  setProductsOnPage(products.slice(firstProductIndex, lastProductIndex));
};
