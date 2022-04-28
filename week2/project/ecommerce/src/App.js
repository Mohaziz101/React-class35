import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;