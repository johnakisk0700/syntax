import { Box, Chip, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useRecentlyViewed } from "../../context/RecentlyViewedProvider";
import { IMovieShort } from "../../models/movies";

type Props = {};

function RecentlyViewed({}: Props) {
  const { recentlyViewed, addToRecentlyViewed } = useRecentlyViewed() as {
    recentlyViewed: IMovieShort[];
    addToRecentlyViewed: (movie: IMovieShort) => void;
  };
  return (
    <Box my={2}>
      <Typography fontSize="xsmall" mb={0.5}>
        RECENTLY VIEWED
      </Typography>
      <Box display="flex" gap={1} flexWrap="wrap">
        {recentlyViewed.map((recent) => (
          <NavLink
            to={`/movie/${recent.imdbID}`}
            onClick={() => {
              addToRecentlyViewed(recent);
            }}
            key={recent.imdbID}
          >
            <Chip
              label={recent.Title}
              sx={{
                transition: "all 0.2s",
                ":hover": {
                  scale: "1.1",
                  cursor: "pointer",
                  backgroundColor: "black",
                  color: "white",
                },
              }}
            />
          </NavLink>
        ))}
      </Box>
    </Box>
  );
}

export default RecentlyViewed;
