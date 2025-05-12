import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Mission = () => {
  return (
    <Grid container spacing={8} size={12} direction="column">
      <Grid
        container
        direction={"column"}
        sx={{ alignItems: "center", justifyContent: "center" }}
        size={12}
        spacing={3}
      >
        <Typography variant="h2" sx={{ fontWeight: "bold" }}>
          About Himanshu's Academy
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Empowering learners worldwide with high-quality education that's
          accessible, engaging, and effective.
        </Typography>
      </Grid>
      <Grid container size={12}>
        <Grid
          size={6}
          container
          direction="column"
          spacing={0}
          sx={{ justifyContent: "space-between" }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Our Mission
          </Typography>
          <Typography variant="h6" color="text.secondary">
            At Himanshu's Academy, our mission is to transform lives through
            education. We believe that quality education should be accessible to
            everyone, regardless of their background or location.
          </Typography>
          <Typography variant="h6" color="text.secondary">
            We're committed to creating engaging, practical courses that help
            our students develop real-world skills and achieve their personal
            and professional goals.
          </Typography>

          <Grid>
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
            >
              Explore Our Courses
            </Button>
          </Grid>
        </Grid>
        <Grid size={6}>
          <img
            height="180"
            src="https://img.freepik.com/premium-photo/concept-mission-with-network-business-symbols_220873-12797.jpg?semt=ais_hybrid&w=740"
            alt="our mission"
            style={{ width: "100%", height: "auto" }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Mission;
