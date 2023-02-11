import React, { PropsWithChildren } from "react";
import { HelmetProvider } from "react-helmet-async";
import { FavouritesProvider } from "./context/FavouritesProvider";
import { RecentlyViewedProvider } from "./context/RecentlyViewedProvider";

function AppProviders({ children }: PropsWithChildren) {
  return (
    <FavouritesProvider>
      <RecentlyViewedProvider>
        <HelmetProvider>{children}</HelmetProvider>
      </RecentlyViewedProvider>
    </FavouritesProvider>
  );
}

export default AppProviders;
