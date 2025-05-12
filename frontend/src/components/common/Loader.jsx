import { Box, CircularProgress } from "@mui/material";
import React from "react";

const Loader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "74vh",
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default Loader;
