import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./components/templates/DefaultLayout";
import FavouritesPage from "./components/pages/FavouritesPage";
import HomePage from "./components/pages/HomePage";
import AppProviders from "./providers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AppProviders>
        <DefaultLayout />
      </AppProviders>
    ),
    errorElement: <div>TODO: ERROR!!!</div>,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "favourites",
        element: <FavouritesPage />,
      },
    ],
  },
]);
