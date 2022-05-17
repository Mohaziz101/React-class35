/** @format */

import { useContext, useEffect, useState } from "react";

import Title from "../components/Title";
import ProductList from "../components/ProductList";
import FavouriteContext from "../contexts/FavouriteContext";
import useFetch from "../hooks/useFetch";

function Favourites() {
  const { favourites } = useContext(FavouriteContext);

  const [products, setProducts] = useState([]);
  const [isFetchLoading, error, performFetch] = useFetch((data) => {
    setProducts(pervProducts => [...pervProducts, data])
  });

  useEffect(() => {
    favourites.forEach((id) => {
      performFetch(`https://fakestoreapi.com/products/${id}`);
    });
  }, [favourites]);// eslint-disable-line react-hooks/exhaustive-deps

  if (error) {
    return "Something went wrong finding the product. Please try again!";
  } else if (favourites.length === 0) {
    return (
      <>
        <Title title='Favourites' />
        <p>You haven't chosen any favourites yet!</p>
      </>
    );
  }

  return (
    <>
      <Title title='Favourites' />
      <ProductList products={products} />
      { isFetchLoading && <p>Loading...</p>}
    </>
  );
}

export default Favourites;
