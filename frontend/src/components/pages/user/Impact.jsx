import { Box, Grid, Typography } from "@mui/material";
import PersonIconOutlinedIcon from "@mui/icons-material/Person";
import MenuBookIconOutlinedIcon from "@mui/icons-material/MenuBook";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";

const Impact = () => {
  return (
    <Grid
      sx={{ my: 8, py: 8, backgroundColor: "background.default" }}
      container
      direction="column"
      spacing={4}
      size={12}
    >
      <Typography align="center" variant="h4" sx={{ fontWeight: "bold" }}>
        Our Impact
      </Typography>
      <Typography align="center" variant="h6" color="text.secondary" gutterBottom>
        We're proud of what we've accomplished together with our students.
      </Typography>

      <Grid
        container
        sx={{ justifyContent: "space-around", alignItems: "center" }}
        size={12}
      >
        {[
          { value: "10,000+", label: "Students", icon: PersonIconOutlinedIcon },
          { value: "50+", label: "Courses", icon: MenuBookIconOutlinedIcon },
          {
            value: "95%",
            label: "Satisfaction Rate",
            icon: FavoriteBorderOutlinedIcon,
          },
          {
            value: "1,000+",
            label: "Success Stories",
            icon: SchoolOutlinedIcon,
          },
        ].map((stat, index) => (
          <Grid
            key={index}
            container
            direction={"column"}
            sx={{ alignItems: "center" }}
            spacing={0}
          >
            <Box
              sx={{
                width: "4rem",
                height: "4rem",
                borderRadius: "50%",
                p: 2,
                backgroundColor: "background.paper",
                display: "flex",
                alignItems: "center",
                border: "1px solid lightgray",
                justifyContent: "center",
              }}
            >
              <stat.icon fontSize="large" />
            </Box>
            <Typography variant="h3" sx={{ fontWeight: "bold" }}>
              {stat.value}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {stat.label}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Impact;
