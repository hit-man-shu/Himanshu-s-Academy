import {
  Button,
  Grid,
  InputAdornment,
  MenuItem,
  Select,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ArrowDropDown } from "@mui/icons-material";

const CourseCatalog = ({
  courseTitle,
  courseDescription,
  showFilter,
  priceFilter,
  sortBy,
  setSortBy,
  searchTerm,
  setSearchTerm,
  handleClick,
}) => {
  return (
    <Grid container direction="column" size={12}>
      <Grid container direction={"column"} spacing={2} sx={{ py: 4 }}>
        <Typography component="h3" variant="h3" sx={{ fontWeight: "bold" }}>
          {courseTitle}
        </Typography>
        <Typography color="text.secondary" variant="h6" gutterBottom>
          {courseDescription}
        </Typography>
      </Grid>

      {/* Filter  */}
      <Grid container size={12} sx={{ alignItems: "center", pb: 4 }}>
        <Grid
          container
          sx={{ alignItems: "center" }}
          spacing={1}
          size={{ xs: 12, md: 12, lg: 6 }}
        >
          {showFilter && (
            <>
              <Grid size={6}>
                <TextField
                  placeholder="Search courses..."
                  variant="outlined"
                  fullWidth
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    },
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "10px",
                      height: "2.5rem", // Set matching height
                    },
                  }}
                />
              </Grid>
              <Button
                variant="contained"
                sx={{
                  height: "2.5rem",
                  minWidth: "4rem",
                  borderRadius: "10px",
                }}
                onClick={handleClick}
              >
                <SearchIcon />
              </Button>
            </>
          )}
        </Grid>

        {/* Price filter  */}
        <Grid
          container
          size={{ xs: 12, md: 12, lg: 6 }}
          sx={{ justifyContent: "flex-end" }}
        >
          {priceFilter && (
            <>
              <Select
                value={sortBy}
                variant="outlined"
                onChange={(e) => setSortBy(e.target.value)}
                IconComponent={ArrowDropDown}
                sx={{
                  minWidth: "10rem",
                  height: "2.5rem",
                  borderRadius: "10px",
                  "& .MuiSelect-select": {
                    fontWeight: "bold",
                  },
                }}
              >
                <MenuItem value="Newest">Newest</MenuItem>
                <MenuItem value="Price: Low to High">
                  Price: Low to High
                </MenuItem>
                <MenuItem value="Price: High to Low">
                  Price: High to Low
                </MenuItem>
              </Select>
            </>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CourseCatalog;
