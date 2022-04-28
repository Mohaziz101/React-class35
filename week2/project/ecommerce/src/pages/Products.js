import { useState, useEffect } from 'react';

import Title from '../components/Title';
import Categories from '../components/Categories';
import ProductList from '../components/ProductList';
import useFetch from '../hooks/useFetch';

function Products() {
  const [title] = useState('Products');

  const [categories, setCategories] = useState([]);
  const [isCategoriesLoading, categoriesError, performFetchCategories] =
    useFetch('https://fakestoreapi.com/products/categories', setCategories);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const toggleCategory = (categoryName) => {
    if (selectedCategory === categoryName) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(categoryName);
    }
  };

  const [products, setProducts] = useState([]);
  const [isProductsLoading, productsError, performFetchProducts] = useFetch(
    selectedCategory != null
      ? `https://fakestoreapi.com/products/category/${selectedCategory}`
      : 'https://fakestoreapi.com/products',
    setProducts,
  );

  useEffect(() => {
    performFetchCategories();
  }, []);// eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    performFetchProducts();
  }, [selectedCategory]);// eslint-disable-line react-hooks/exhaustive-deps

  if (categoriesError) {
    return 'Unable to get the categories, please try again';
  } else if (isCategoriesLoading) {
    return 'Loading...';
  }

  if (productsError) {
    return 'Unable to get the products, please try again';
  } else if (isProductsLoading) {
    return 'Loading...';
  }

  return (
    <>
      <Title title={title} />
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        performToggle={toggleCategory}
      />
      <ProductList products={products} />
    </>
  );
}

export default Products;