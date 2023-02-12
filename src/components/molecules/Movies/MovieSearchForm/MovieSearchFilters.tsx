import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { useState } from "react";
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

  return (
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
  );
}

export default MovieSearchFilters;
