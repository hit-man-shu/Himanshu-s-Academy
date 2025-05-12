import AdminCourseItem from "./AdminCourseItem";
import { Grid } from "@mui/material";

const CardView = ({ course, ...props }) => {
  return (
    <Grid container spacing={3} size={{ xs: 12 }}>
      {course?.courses?.map((course) => (
        <AdminCourseItem course={course} {...props} key={course._id} />
      ))}
    </Grid>
  );
};

export default CardView;
