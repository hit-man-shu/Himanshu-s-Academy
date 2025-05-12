import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import ImportContactsOutlinedIcon from "@mui/icons-material/ImportContactsOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";

const Testimonial = () => {
  return (
    <Grid
      container
      size={{ xs: 12, md: 12, lg: 6 }}
      direction="column"
      sx={{ py: 12 }}
      gap={6}
    >
      <Grid
        sx={{ justifyContent: "center", alignItems: "center" }}
        container
        direction="column"
      >
        <Typography component="h2" variant="h2" sx={{ fontWeight: "bold" }}>
          Why Choose Us
        </Typography>
        <Typography variant="body2" color="text.secondary">
          We provide high-quality education with expert instructors and flexible
          learning options.
        </Typography>
      </Grid>
      <Grid container size={12} spacing={8}>
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <Card sx={{ border: `1px solid lightgray` }}>
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                  p: 1,
                  minHeight: "12rem",
                }}
              >
                <ImportContactsOutlinedIcon
                  sx={{ fontSize: "3rem", color: "blue" }}
                />
                <Typography
                  component="h6"
                  variant="h6"
                  sx={{ fontWeight: "bold" }}
                  gutterBottom
                >
                  Comprehensive Curriculum
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Our courses are designed to provide in-depth knowledge and
                  practical skills that are relevant in today's market.
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <Card>
            <Card sx={{ border: `1px solid lightgray` }}>
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                    p: 1,
                    minHeight: "12rem",
                  }}
                >
                  <PeopleAltOutlinedIcon
                    sx={{ fontSize: "3rem", color: "blue" }}
                  />
                  <Typography
                    component="h6"
                    variant="h6"
                    sx={{ fontWeight: "bold" }}
                    gutterBottom
                  >
                    Expert Instructors
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Learn from industry professionals with years of experience
                    and a passion for teaching.
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <Card>
            {" "}
            <Card sx={{ border: `1px solid lightgray` }}>
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                    p: 1,
                    minHeight: "12rem",
                  }}
                >
                  <SchoolOutlinedIcon
                    sx={{ fontSize: "3rem", color: "blue" }}
                  />
                  <Typography
                    component="h6"
                    variant="h6"
                    sx={{ fontWeight: "bold" }}
                    gutterBottom
                  >
                    Flexible Learning
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Study at your own pace with lifetime access to course
                    materials and regular updates.
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Testimonial;
