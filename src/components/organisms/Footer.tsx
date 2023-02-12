import { Box, Container, Typography } from "@mui/material";
import { brown } from "@mui/material/colors";
import React from "react";
import RecentlyViewed from "../molecules/RecentlyViewed";

type Props = {};

function Footer({}: Props) {
  return (
    <Box sx={{ backgroundColor: brown[100] }} mt={4}>
      <Container maxWidth="md">
        <RecentlyViewed />
        <Typography textAlign="center" mt={4} pb={2} fontSize="0.875rem">
          Syntax IT® Assignment (2023)
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
