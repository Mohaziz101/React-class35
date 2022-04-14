import './App.css';
import Title from './components/Title';
import Categories from './components/Categories';
import dataCategories from './fake-data/all-categories';
import { useState } from 'react';
import ProductList from './components/ProductList';
import dataProducts from './fake-data/all-products';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [products, setProducts] = useState(dataProducts);

  function performToggle(category) {
    setSelectedCategory(category);
    const filteredItems = dataProducts.filter((product) => {
      return product.category === category.substring(6);
    });
    setProducts(filteredItems);
  }

  return (
    <>
      <Title title={'Products'} />
      <Categories
        categories={dataCategories}
        selectedCategory={selectedCategory}
        performToggle={performToggle}
      />
      <ProductList products={products} />
    </>
  );
}

export default App;