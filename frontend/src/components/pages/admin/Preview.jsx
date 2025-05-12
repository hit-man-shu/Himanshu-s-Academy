import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

const Preview = ({ course }) => {
  return (
    <Card sx={{ padding: 2, mt: 2 }}>
      <CardHeader
        title={
          <Typography variant="h6" fontWeight={"bold"}>
            Course Preview
          </Typography>
        }
        subheader={
          <Typography variant="subtitle1" fontWeight={"400"}>
            Preview how your course will appear to students.
          </Typography>
        }
      />
      <CardMedia
        component="img"
        height="550"
        alt={course.title}
        image={course.image}
        sx={{
          objectFit: "cover",
          width: "100%",
        }}
      />
      <CardContent>
        <Typography variant="h6" fontWeight={"bold"}>
          {course.title}
        </Typography>

        <Grid container size={{ xs: 12 }} spacing={3}>
          <Grid>{course.duration}</Grid>
          <Grid>{course.price}</Grid>
        </Grid>

        <Typography sx={{ my: 2 }} variant="body1" fontWeight={"bold"}>
          About this course
        </Typography>
        <Typography variant="subtitle2" sx={{ fontWeight: "400" }} gutterBottom>
          {course.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Preview;
