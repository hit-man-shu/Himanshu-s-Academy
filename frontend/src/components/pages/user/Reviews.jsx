import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import ImportContactsOutlinedIcon from "@mui/icons-material/ImportContactsOutlined";

const Reviews = () => {
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
          What Our Students Say
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Hear from our students about their learning experience with us.
        </Typography>
      </Grid>
      <Grid container size={12} spacing={8}>
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <Card
            sx={{
              border: `1px solid lightgray`,
              backgroundColor: "inherit",
            }}
          >
            <CardContent>
              <Typography sx={{ pl: 2 }} variant="body1" color="text.secondary">
                "The courses at Himanshu's Academy helped me transition from a
                beginner to a professional developer. The instructors are
                knowledgeable and the content is well-structured."
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <Avatar />
                  </ListItemIcon>
                  <ListItemText
                    primary="Alex Johnson"
                    secondary="Software Developer"
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <Card
            sx={{
              border: `1px solid lightgray`,
              backgroundColor: "inherit",
            }}
          >
            <CardContent>
              <Typography
                sx={{ pl: 2, minHeight: "7rem" }}
                variant="body1"
                color="text.secondary"
                gutterBottom
              >
                "The data science course was comprehensive and up-to-date with
                industry standards. I was able to apply what I learned
                immediately in my job."
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <Avatar />
                  </ListItemIcon>
                  <ListItemText
                    primary="David Wilson"
                    secondary="Data Analyst"
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <Card
            sx={{
              border: `1px solid lightgray`,
              backgroundColor: "inherit",
            }}
          >
            <CardContent>
              <Typography
                sx={{ pl: 2, minHeight: "7rem" }}
                variant="body1"
                color="text.secondary"
                gutterBottom
              >
                "I've taken multiple design courses here and each one has
                significantly improved my skills. The practical projects and
                feedback from instructors were invaluable."
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <Avatar />
                  </ListItemIcon>
                  <ListItemText
                    primary="Priya Sharma"
                    secondary="UX Designer"
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Reviews;
