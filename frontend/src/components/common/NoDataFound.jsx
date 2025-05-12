import SearchOffIcon from "@mui/icons-material/SearchOff";
import { Grid, Typography } from "@mui/material";

const NoDataFound = () => {
  return (
    <Grid
      container
      direction="column"
      sx={{
        justifyContent: "center",
        alignItems: "center",
        py: 6,
        height: "100%",
      }}
    >
      <SearchOffIcon sx={{ fontSize: 64, mb: 2, color: "text.disabled" }} />
      <Typography variant="h6" align="center" sx={{ fontWeight: "600" }}>
        No Data Found!
      </Typography>
    </Grid>
  );
};

export default NoDataFound;
