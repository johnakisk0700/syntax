import { Box, Button, IconButton, Typography } from "@mui/material";
import Logo from "../atoms/Logo";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { NavLink } from "react-router-dom";

type Props = {};

function HeaderMenuBar({}: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexGrow: 1,
      }}
    >
      <Logo size={64} />
      <Box>
        <NavLink
          to="/favourites"
          style={({ isActive }) => (isActive ? { display: "none" } : {})}
        >
          <IconButton color="error">
            <FavoriteIcon />
          </IconButton>
        </NavLink>
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? { display: "none" } : {})}
        >
          <Button variant="text" sx={{ fontSize: "0.875rem" }}>
            BACK TO HOME
          </Button>
        </NavLink>
      </Box>
    </Box>
  );
}

export default HeaderMenuBar;
