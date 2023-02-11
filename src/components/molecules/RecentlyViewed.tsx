import { Box, Chip, Typography } from "@mui/material";
import { useRecentlyViewed } from "../../context/RecentlyViewedProvider";
import { IMovie } from "../../models/movies";

type Props = {};

function RecentlyViewed({}: Props) {
  const { recentlyViewed } = useRecentlyViewed() as {
    recentlyViewed: IMovie[];
  };
  return (
    <Box my={2}>
      <Typography fontSize="xsmall" mb={0.5}>
        RECENTLY VIEWED
      </Typography>
      <Box display="flex" gap={1} flexWrap="wrap">
        {recentlyViewed.map((recent) => (
          <Chip label={recent.Title} />
        ))}
      </Box>
    </Box>
  );
}

export default RecentlyViewed;
