import { createContext, useContext, useState, useEffect, ReactNode, Dispatch, SetStateAction } from 'react';

interface FavoriteTribe {
  name: string;
  imgUrl: string;
}

interface FavoritesContextType {
  favorites: FavoriteTribe[];
  setFavorites: Dispatch<SetStateAction<FavoriteTribe[]>>;
  removeFavorite: (tribeName: string) => void;
}

export const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

interface FavoritesProviderProps {
  children: ReactNode;
}

export const FavoritesProvider = ({ children }: FavoritesProviderProps) => {
  const [favorites, setFavorites] = useState<FavoriteTribe[]>(() => {
    const storedFavorites = localStorage.getItem('favorites');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const removeFavorite = (tribeName: string) => {
    setFavorites(favorites.filter(tribe => tribe.name !== tribeName));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }

  return context;
};


