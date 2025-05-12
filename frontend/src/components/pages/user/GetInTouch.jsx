import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import PersonIconOutlinedIcon from "@mui/icons-material/Person";
import MenuBookIconOutlinedIcon from "@mui/icons-material/MenuBook";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const GetInTouch = () => {
  return (
    <Grid
      sx={{ my: 8, py: 8 }}
      container
      direction="column"
      spacing={4}
      size={12}
    >
      <Typography align="center" variant="h4" sx={{ fontWeight: "bold" }}>
        Get in Touch
      </Typography>
      <Typography
        align="center"
        variant="h6"
        color="text.secondary"
        gutterBottom
      >
        Have questions or feedback? We'd love to hear from you.
      </Typography>

      <Grid
        container
        sx={{ justifyContent: "space-around", alignItems: "center" }}
        size={12}
      >
        {[
          {
            value: "himanshusahoo2019@gmail.com",
            label: "Email Us",
            icon: MailOutlineOutlinedIcon,
          },
          {
            value: "+91 8920250047",
            label: "Call Us",
            icon: LocalPhoneOutlinedIcon,
          },
          {
            value: "Bangalore, Karnataka, India",
            label: "Visit Us",
            icon: LocationOnOutlinedIcon,
          },
        ].map((stat, index) => (
          <Grid size={4} key={index}>
            <Card sx={{ border: "1px solid lightgray", p: 2 }}>
              <CardContent>
                <Grid
                  container
                  direction="column"
                  sx={{ justifyContent: "center", alignItems: "center" }}
                  spacing={2}
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
                  <Typography>{stat.label}</Typography>
                  <Typography>{stat.value}</Typography>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default GetInTouch;
