import { ThemeProvider } from "@mui/material";
import React, { PropsWithChildren } from "react";
import { HelmetProvider } from "react-helmet-async";
import { FavouritesProvider } from "./context/FavouritesProvider";
import { RecentlyViewedProvider } from "./context/RecentlyViewedProvider";
import { theme } from "./theme";

function AppProviders({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={theme}>
      <FavouritesProvider>
        <RecentlyViewedProvider>
          <HelmetProvider>{children}</HelmetProvider>
        </RecentlyViewedProvider>
      </FavouritesProvider>
    </ThemeProvider>
  );
}

export default AppProviders;
