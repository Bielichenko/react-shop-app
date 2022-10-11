export async function fetchMovies(setProducts) {
  await fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(productsFromServer => setProducts(productsFromServer));
}
