import {
  Card,
  CardActionArea,
  CardActions,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

const Overview = ({ course }) => {
  return (
    <Card sx={{ padding: 2, mt: 2 }}>
      <CardHeader
        title={
          <Typography variant="h6" fontWeight={"bold"}>
            Course Details
          </Typography>
        }
        subheader={
          <Typography variant="subtitle1" fontWeight={"400"}>
            Complete information about this course.
          </Typography>
        }
      />
      <CardActions sx={{ px: 2 }}>
        <Grid container size={{ xs: 12 }} spacing={2} direction={"column"}>
          <Grid>
            <Typography variant="body1" fontWeight={"bold"}>
              Title
            </Typography>
            <Typography variant="body2">{course.title}</Typography>
          </Grid>

          <Grid>
            <Typography variant="body1" fontWeight={"bold"}>
              Description
            </Typography>
            <Typography variant="body2">{course.description}</Typography>
          </Grid>

          <Grid>
            <Typography variant="body1" fontWeight={"bold"}>
              Duration
            </Typography>
            <Typography variant="body2">{course.duration}</Typography>
          </Grid>

          <Grid>
            <Typography variant="body1" fontWeight={"bold"}>
              Price
            </Typography>
            <Typography variant="body2">{course.price}</Typography>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default Overview;
