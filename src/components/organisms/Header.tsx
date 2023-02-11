import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import HeaderMenuBar from "../molecules/HeaderMenuBar";

type Props = {};

function Header({}: Props) {
  return (
    <Box sx={{ flexGrow: 1, mb: 1 }}>
      <AppBar
        position="static"
        elevation={0}
        sx={{ bgcolor: "transparent", color: "text.primary" }}
      >
        <Toolbar disableGutters>
          <HeaderMenuBar />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
