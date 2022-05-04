import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { FavouriteContextProvider } from './contexts/FavouriteContext';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Favourites from './pages/Favourites';

function App() {
  return (
    <FavouriteContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </BrowserRouter>
    </FavouriteContextProvider>
  );
}

export default App;