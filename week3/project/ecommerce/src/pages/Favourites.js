import { useContext, useEffect, useState } from 'react';

import Title from '../components/Title';
import ProductList from '../components/ProductList';
import FavouriteContext from '../contexts/FavouriteContext';

function Favourites() {
  const [title] = useState('Favourites');

  const { favourites } = useContext(FavouriteContext);

  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetches = favourites.map((id) =>
      fetch(`https://fakestoreapi.com/products/${id}`),
    );

    setError(false);

    Promise.all(fetches)
      .then((results) => {
        return Promise.all(results.map((result) => result.json()));
      })
      .then((resultProducts) => {
        setProducts(resultProducts);
      })
      .finally(() => {
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
      });
  }, [favourites]);

  if (error) {
    return 'Something went wrong finding the product. Please try again!';
  } else if (isLoading) {
    return 'Loading...';
  } else if (products === null || products.length === 0) {
    return (
      <>
        <Title title={title} />
        <p>"You haven't chosen any favourites yet!"</p>
      </>
    );
  }

  return (
    <>
      <Title title={title} />
      <ProductList products={products} />
    </>
  );
}

export default Favourites;