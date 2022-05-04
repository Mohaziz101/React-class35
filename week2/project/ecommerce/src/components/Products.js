import { useEffect, useState } from 'react';

import Categories from './Categories';
import Product from './Product';
import '../css/Products.css';

function Products() {
  const [categories, setCategories] = useState([]);
  const [isCategoriesLoading, setCategoriesLoading] = useState(true);
  const [categoriesError, setCategoriesError] = useState(false);

  const [products, setProducts] = useState([]);
  const [isProductsLoading, setProductsLoading] = useState(true);
  const [productsError, setProductsError] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState(null);

  const toggleCategory = (categoryName) => {
    if (selectedCategory === categoryName) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(categoryName);
    }
  };

  useEffect(() => {
    setCategoriesError(false);
    const getCategories = async () => {
      try {
        const response = await fetch(
          'https://fakestoreapi.com/products/categories',
        );
        const categories = await response.json();
        setCategoriesLoading(false);
        setCategories(categories);
      } catch (error) {
        console.error(error);
        setCategoriesError(true);
      }
    };

    getCategories();
  }, []);

  useEffect(() => {
    let url = 'https://fakestoreapi.com/products';
    if (selectedCategory !== null) {
      url = `https://fakestoreapi.com/products/category/${selectedCategory}`;
    }

    setProductsError(false);
    setProductsLoading(true);
    const getProducts = async () => {
      try {
        const response = await fetch(url);
        const products = await response.json();
        setProducts(products);
        setProductsLoading(false);
      } catch (error) {
        console.error(error);
        setProductsError(true);
      }
    };

    getProducts();
  }, [selectedCategory]);

  let categoriesComponent = null;
  if (categoriesError) {
    categoriesComponent = 'Unable to get the categories, please try again';
  } else if (isCategoriesLoading) {
    categoriesComponent = 'Loading...';
  } else {
    categoriesComponent = (
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        performToggle={toggleCategory}
      />
    );
  }

  let productsComponent = null;
  if (productsError) {
    productsComponent = 'Unable to get the products, please try again';
  } else if (isProductsLoading) {
    productsComponent = 'Loading...';
  } else {
    productsComponent = (
      <ul className="products">
        {products.map((product) => {
          return (
            <li key={`product-${product.id}`} className="products-item">
              <Product title={product.title} image={product.image} />
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <>
      <div className='header-title'>
        <h1>Products</h1>
      </div>
      {categoriesComponent}
      {productsComponent}
    </>
  );
}

export default Products;