import {
  Box,
  Card,
  CardActions,
  CardContent,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";
import React from "react";

const CourseLoader = () => {
  return (
    <Grid container spacing={3}>
      {[...Array(6)].map((_, index) => (
        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
          {" "}
          <Card sx={{ borderRadius: 3, boxShadow: 4 }}>
            <Skeleton variant="rectangular" height={180} />

            <CardContent>
              <Typography variant="h6" gutterBottom>
                <Skeleton width="80%" />
              </Typography>

              <Typography variant="body2" color="text.secondary" gutterBottom>
                <Skeleton width="100%" />
                <Skeleton width="90%" />
              </Typography>

              <Typography variant="body2" fontWeight="500">
                <Skeleton width="60%" />
              </Typography>
              <Typography variant="body2" fontWeight="500">
                <Skeleton width="50%" />
              </Typography>
            </CardContent>

            <CardActions>
              <Skeleton variant="rectangular" width={80} height={36} />
              <Skeleton variant="rectangular" width={80} height={36} />
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CourseLoader;
