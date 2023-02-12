import { Box, Button, IconButton, Typography } from "@mui/material";
import Logo from "../atoms/Logo";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { NavLink } from "react-router-dom";
import { useFavourites } from "../../context/FavouritesProvider";
import { IFavouritesProvider } from "../../models/favourites";

type Props = {};

function HeaderMenuBar({}: Props) {
  const { favourites } = useFavourites() as IFavouritesProvider;
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexGrow: 1,
      }}
    >
      <NavLink to="/">
        <Logo size={72} />
      </NavLink>
      <Box>
        <NavLink
          to="/favourites"
          style={({ isActive }) =>
            isActive
              ? { display: "none" }
              : {
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                }
          }
        >
          <Typography color="text.primary" fontSize="small">
            ({favourites && Object.keys(favourites).length})
          </Typography>
          <IconButton color="error">
            <FavoriteIcon />
          </IconButton>
        </NavLink>
      </Box>
    </Box>
  );
}

export default HeaderMenuBar;
