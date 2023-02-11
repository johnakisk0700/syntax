import { createContext, PropsWithChildren, useEffect } from "react";

export const FavouritesContext = createContext(null);

export const FavouritesProvider = ({ children }: PropsWithChildren) => {
  return (
    <FavouritesContext.Provider value={null}>
      {children}
    </FavouritesContext.Provider>
  );
};
