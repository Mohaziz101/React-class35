import React, { useState } from 'react';

const FavouriteContext = React.createContext({ favourites: [] });

export function FavouriteContextProvider({ children }) {
  const [favourites, setFavourites] = useState([]);

  const isFavourite = (id) => {
    return favourites.includes(id);
  };

  const toggleFavourite = (id) => {
    const newFavourites = favourites.filter((favourite) => favourite !== id);
    if (newFavourites.length === favourites.length) {
      setFavourites([...newFavourites, id]);
    } else {
      setFavourites(newFavourites);
    }
  };

  return (
    <FavouriteContext.Provider
      value={{
        favourites,
        toggleFavourite,
        isFavourite,
      }}
    >
      {children}
    </FavouriteContext.Provider>
  );
}

export default FavouriteContext;