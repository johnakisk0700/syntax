import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./components/templates/DefaultLayout";
import FavouritesPage from "./components/pages/Favourites/FavouritesPage";
import HomePage from "./components/pages/Home/HomePage";
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
