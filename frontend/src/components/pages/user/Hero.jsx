import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <Grid container size={12}>
      <Grid
        container
        direction="column"
        gap={2}
        size={{ xs: 12, md: 12, lg: 6 }}
        sx={{ py: 16 }}
      >
        <Typography
          variant="h2"
          component="h1"
          sx={{ fontWeight: "bold" }}
          color="primary"
        >
          Welcome to Himanshu's Academy
        </Typography>
        <Typography
          variant="h5"
          component="p"
          color="text.secondary"
          sx={{ maxWidth: 700, margin: "0, auto" }}
        >
          Unlock your potential with our expert-led courses. Learn at your own
          pace and achieve your goals.
        </Typography>

        <Stack direction="row" spacing={2}>
          <Button
            size="large"
            sx={{
              px: 4,
              py: 1.5,
              fontWeight: 600,
            }}
            variant="contained"
            component={Link}
            to="/courses"
            endIcon={<ArrowForwardIcon />}
          >
            Browse Courses
          </Button>
          <Button
            size="large"
            color="primary"
            sx={{
              px: 4,
              py: 1.5,
              fontWeight: 600,
              "&:hover": {
                backgroundColor: "secondary.light",
              },
            }}
            component={Link}
            to="/about"
            variant="outlined"
          >
            Learn More
          </Button>
        </Stack>
      </Grid>
      <Grid
        container
        size={{ xs: 12, md: 12, lg: 6 }}
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          size={12}
          container
          sx={{
            width: { xs: 300, md: 350, lg: 400 }, // Responsive width
            height: { xs: 300, md: 350, lg: 400 }, // Same as width to maintain circle
            aspectRatio: "1 / 1", // Ensures perfect circle regardless of size
            borderRadius: "50%", // Better than "100%" for circle
            backgroundColor: "background.paper",
            border: `1px solid lightgray`,
            justifyContent: "center",
            alignItems: "center",
            mx: "auto", // Center horizontally
          }}
        >
          <Grid
            container
            direction="column"
            sx={{ justifyContent: "center", alignItems: "center" }}
            size={12}
          >
            <SchoolOutlinedIcon sx={{ fontSize: "3rem", color: "blue" }} />
            <Typography
              component={"h4"}
              variant="h5"
              sx={{ fontWeight: "bold" }}
              gutterBottom
            >
              Start Learning Today
            </Typography>
            <Typography component="p" variant="body1" color="text.secondary">
              Join thousands of satisfied students
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Hero;
