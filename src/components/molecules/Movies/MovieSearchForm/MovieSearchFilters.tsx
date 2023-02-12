import {
  Box,
  debounce,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

type Props = {};

function MovieSearchFilters({}: Props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [type, setType] = useState<string | null>(
    searchParams.get("type") || "movie"
  );

  const clearFilters = () => {
    const newParams = searchParams.get("s") || {};
    setSearchParams(() => new URLSearchParams(newParams));
  };

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newType: string | null
  ) => {
    setType(newType);
    if (newType) {
      setSearchParams({
        ...Object.fromEntries(searchParams.entries()),
        type: newType,
      });
    }
  };

  const debouncedChangeYear = useMemo(
    () =>
      debounce((e: any) => {
        setSearchParams({
          ...Object.fromEntries(searchParams.entries()),
          y: e.target.value,
        });
      }, 500),
    []
  );

  const handleChangeYear = (e: any) => {
    debouncedChangeYear(e);
  };

  return (
    <Box display="flex" flexWrap="wrap">
      <ToggleButtonGroup
        value={type}
        exclusive
        onChange={handleChange}
        aria-label="select type"
      >
        <ToggleButton value="movie" aria-label="left aligned">
          Movie
        </ToggleButton>
        <ToggleButton value="series" aria-label="centered">
          Series
        </ToggleButton>
        <ToggleButton value="episode" aria-label="right aligned">
          Episode
        </ToggleButton>
      </ToggleButtonGroup>

      <TextField
        label="Year"
        sx={{ ml: 2 }}
        onChange={handleChangeYear}
        defaultValue={searchParams.get("y")}
      />
    </Box>
  );
}

export default MovieSearchFilters;
