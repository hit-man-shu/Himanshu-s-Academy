import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <AppBar
      position="relative"
      sx={{
        top: "auto", // Allows bottom positioning
        bottom: 0, // Sticks to bottom
        backgroundColor: "background.default",
        borderTop: "1px solid lightgray",
        color: "text.primary",
        borderRadius: 0,
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="body2">
            © 2025 Himanshu's Academy. All rights reserved.
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
