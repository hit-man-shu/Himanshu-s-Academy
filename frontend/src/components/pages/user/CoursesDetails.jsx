import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { fetchSingleCourse } from "../../utils/api";
import Loader from "../../common/Loader";
import { ErrorBlock } from "../../Error/ErrorBlock";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CircleIcon from "@mui/icons-material/Circle";
import BuyNowModal from "./BuyNowModal";
import { useState } from "react";

const CoursesDetails = () => {
  const { id } = useParams();
  const [byNow, setByNow] = useState(false);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["course", { id }],
    queryFn: ({ signal }) => fetchSingleCourse({ courseId: id, signal }),
  });

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return (
      <ErrorBlock
        title={error?.response?.data?.errors || "Something went wrong!"}
        description={error?.response?.data?.message}
      />
    );
  }

  return (
    <>
      <BuyNowModal open={byNow} course={data} onClose={() => setByNow(false)} />
      <Container
        maxWidth="xl"
        sx={{ py: 8, overflow: "visible", position: "relative" }}
      >
        <Grid container direction={"column"} spacing={4}>
          <Grid container size={12}>
            <Grid size={4}>
              <Button
                startIcon={<ArrowBackIcon />}
                sx={{ "&:hover": { backgroundColor: "secondary.dark" } }}
                component={Link}
                size="small"
                to="../"
              >
                Back to Courses
              </Button>
            </Grid>
          </Grid>

          <Grid container size={12}>
            <Grid size={8} spacing={2} container direction={"column"}>
              {/* Course Header  */}
              <Typography variant="h2" sx={{ fontWeight: "bold" }}>
                {data.title}
              </Typography>
              <Grid container size={12}>
                <Typography variant="body1" color="text.secondary">
                  ⌛ Duration: {data.duration}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  💰 Price: ${data.price}
                </Typography>
              </Grid>

              {/* Course Image  */}
              <Grid size={12}>
                <img
                  height="180"
                  src={data.image}
                  alt={data.title}
                  style={{ width: "100%", height: "auto" }}
                />
              </Grid>

              <Grid size={12} container direction={"column"} spacing={1}>
                <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                  About This Course
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {data.description}
                </Typography>
              </Grid>
            </Grid>
            <Grid size={4}>
              <Card
                sx={{
                  border: "1px solid lightgray",
                }}
              >
                <CardContent>
                  <Grid size={12} container direction={"column"} spacing={2}>
                    <Grid size={12}>
                      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                        ${data.price}
                      </Typography>
                    </Grid>
                    <Grid size={12}>
                      <Button
                        sx={{ padding: 1 }}
                        startIcon={<ShoppingCartOutlinedIcon />}
                        fullWidth
                        onClick={() => setByNow(true)}
                        variant="contained"
                      >
                        Enroll Now
                      </Button>
                    </Grid>
                    <Grid
                      sx={{
                        padding: 2,
                        backgroundColor: "divider",
                        borderRadius: 2,
                      }}
                    >
                      <Typography variant="body2" sx={{ fontWeight: "600" }}>
                        This course includes:
                      </Typography>
                      <List>
                        <ListItem>
                          <CircleIcon
                            sx={{ fontSize: "0.5rem", mr: 1 }}
                            color="primary"
                          />
                          <ListItemText
                            secondary={`${data.duration} of on-demand video`}
                          />
                        </ListItem>
                        <ListItem>
                          <CircleIcon
                            sx={{ fontSize: "0.5rem", mr: 1 }}
                            color="primary"
                          />
                          <ListItemText secondary="Full lifetime access" />
                        </ListItem>
                        <ListItem>
                          <CircleIcon
                            sx={{ fontSize: "0.5rem", mr: 1 }}
                            color="primary"
                          />
                          <ListItemText
                            secondary="
                        Access on mobile and desktop"
                          />
                        </ListItem>

                        <ListItem>
                          <CircleIcon
                            sx={{ fontSize: "0.5rem", mr: 1 }}
                            color="primary"
                          />
                          <ListItemText
                            secondary="
                        Certificate of completion"
                          />
                        </ListItem>
                      </List>
                    </Grid>
                    <Grid
                      container
                      size={12}
                      sx={{ justifyContent: "center", alignItems: "center" }}
                    >
                      <Typography variant="body2" color="text.secondary">
                        30-Day Money-Back Guarantee
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default CoursesDetails;
