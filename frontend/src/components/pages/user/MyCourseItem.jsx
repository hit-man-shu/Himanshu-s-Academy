import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import NoDataFound from "../../common/NoDataFound";

const MyCourseItem = ({ data = [] }) => {
  if (!data.length) {
    return <NoDataFound />;
  }

  return (
    <>
      <Grid container spacing={3}>
        {data?.map((course) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={course._id}>
            <Card sx={{ borderRadius: 2, boxShadow: 4 }}>
              <CardMedia
                component="img"
                height="180"
                image={course.courseId.image}
                alt={course.courseId.title}
              />
              <CardContent>
                <Grid container size={12} spacing={2} direction="column">
                  <Typography
                    component={Link}
                    to={course.courseId._id}
                    variant="h6"
                    fontWeight="bold"
                    color="primary"
                    sx={{ textDecoration: "none" }}
                  >
                    {course.courseId.title}
                  </Typography>
                  <Typography
                    sx={{ minHeight: "60px" }}
                    variant="body2"
                    color="text.secondary"
                  >
                    {course.courseId.description}
                  </Typography>

                  <Grid container size={12}>
                    <Typography variant="body2" fontWeight="500">
                      {course.courseId.duration}
                    </Typography>
                    <Typography variant="body2" fontWeight="500">
                      💰 Price: ${course.courseId.price}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  //   component={Link}
                  //   to={course._id}
                  fullWidth
                  variant="contained"
                >
                  Watch Course
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default MyCourseItem;
