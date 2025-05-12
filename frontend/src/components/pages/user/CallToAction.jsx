import { Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const CallToAction = ({ token, backgroundColor }) => {
  return (
    <Grid
      container
      direction={"column"}
      size={12}
      sx={{
        backgroundColor: backgroundColor || "#3a86ff",
        minHeight: "80vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        size={12}
        container
        direction="column"
        sx={{ justifyContent: "center", alignItems: "center" }}
        spacing={1}
      >
        <Typography
          variant="h2"
          sx={{ fontWeight: "bold" }}
          color="secondary.light"
        >
          Ready to Start Learning?
        </Typography>
        <Typography variant="h6" color="secondary.main" gutterBottom>
          Join thousands of students and start your learning journey today.
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button
            size="large"
            sx={{
              px: 4,
              py: 1.5,
              fontWeight: 600,
              backgroundColor: "secondary.light",
              color: "primary.main",
              "&:hover": {
                backgroundColor: "secondary.dark",
              },
            }}
            variant="contained"
            component={Link}
            to="/courses"
          >
            Browse Courses
          </Button>
          {!token && (
            <Button
              size="large"
              color="secondary"
              sx={{
                px: 4,
                py: 1.5,
                fontWeight: 600,
                "&:hover": {
                  color: "primary.main",
                  backgroundColor: "secondary.light",
                },
              }}
              component={Link}
              to="/signup"
              variant="outlined"
            >
              Sign Up Now
            </Button>
          )}
        </Stack>
      </Grid>
    </Grid>
  );
};

export default CallToAction;
