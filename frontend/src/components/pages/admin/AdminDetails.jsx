import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import { adminDeleteCourse, fetchSingleCourse } from "../../utils/api";
import Loader from "../../common/Loader";
import { ErrorBlock } from "../../Error/ErrorBlock";
import {
  Link,
  useNavigate,
  useParams,
  useRouteLoaderData,
} from "react-router-dom";
import AdminCourseEdit from "./AdminCourseEdit";
import { getUserDataFromToken, queryClient } from "../../utils/utils";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PublicIcon from "@mui/icons-material/Public";
import SwitchView from "./SwitchView";
import ConfirmModal from "../../common/ConfirmModal";

const AdminDetails = () => {
  const [open, setOpen] = useState(false);
  const { adminId } = useParams();
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const navigate = useNavigate();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["singleCourse", { adminId }],
    queryFn: ({ signal }) => fetchSingleCourse({ courseId: adminId, signal }),
  });

  const {
    mutate,
    isError: isDeleteError,
    error: deleteError,
    isPending,
  } = useMutation({
    mutationFn: adminDeleteCourse,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["admin", "admins"],
      });
      navigate("../");
      setDeleteModalOpen(false);
    },
  });

  const { adminToken } = useRouteLoaderData("adminToken");
  const { accountId } = getUserDataFromToken(adminToken);

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

  const handleDelete = () => {
    mutate(data._id);
  };

  return (
    <Container maxWidth="xl" sx={{ mt: 5 }}>
      <AdminCourseEdit open={open} onClose={() => setOpen(false)} />

      <ConfirmModal
        open={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        error={deleteError}
        isLoading={isPending}
        isError={isDeleteError}
        handleSubmit={handleDelete}
      >
        Are you sure you want to delete this course?
      </ConfirmModal>

      {data && (
        <Grid size={{ xs: 12 }} container direction={"column"} spacing={2}>
          <Grid
            container
            size={12}
            spacing={2}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Grid
              container
              justifyContent={"space-between"}
              alignItems={"center"}
              spacing={1}
            >
              <Button
                startIcon={<ArrowBackIcon />}
                sx={{ "&:hover": { backgroundColor: "secondary.dark" } }}
                component={Link}
                size="small"
                to="../"
              />
              <Typography variant="h4" fontWeight={"600"}>
                {data.title}
              </Typography>
              <Chip label="Published" size="small" color="primary" />
            </Grid>
            <Grid container spacing={2}>
              {accountId === data.creatorId && (
                <Button
                  variant="outlined"
                  sx={{ "&:hover": { backgroundColor: "secondary.dark" } }}
                  startIcon={<EditIcon />}
                  onClick={() => setOpen(true)}
                >
                  Edit Course
                </Button>
              )}
            </Grid>
          </Grid>

          <Grid container spacing={6} size={{ xs: 12 }}>
            <Grid size={{ xs: 12, sm: 8 }}>
              <Card sx={{ padding: 2 }}>
                <CardHeader
                  title={
                    <Typography variant="h6" fontWeight={"bold"}>
                      Course Overview
                    </Typography>
                  }
                  subheader={
                    <Typography variant="subtitle1" fontWeight={"400"}>
                      Key information and statistics about this course.
                    </Typography>
                  }
                />
                <Grid container size={{ xs: 12 }} direction={"row"}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <CardMedia
                      component="img"
                      image={data.image}
                      height="180"
                      alt={data.title}
                      sx={{
                        objectFit: "cover",
                      }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <CardContent>
                      <Typography
                        variant="body1"
                        color="textSecondary"
                        component="p"
                        gutterBottom
                      >
                        {data.description}
                      </Typography>

                      <Grid
                        container
                        spacing={6}
                        sx={{ mt: 4 }}
                        size={{ xs: 12 }}
                      >
                        <Grid
                          container
                          direction={"column"}
                          spacing={1}
                          size={{ xs: 6 }}
                        >
                          <Typography variant="body2" fontWeight="500">
                            Duration
                          </Typography>
                          <Typography variant="body1" fontWeight={"600"}>
                            {data.duration}
                          </Typography>
                        </Grid>

                        <Grid
                          container
                          direction={"column"}
                          spacing={1}
                          size={{ xs: 6 }}
                        >
                          <Typography variant="body2" fontWeight="500">
                            Price
                          </Typography>
                          <Typography variant="body1" fontWeight={"600"}>
                            ${data.price}
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Card sx={{ padding: 2 }}>
                <CardHeader
                  title={
                    <Typography variant="h6" fontWeight={"bold"}>
                      Course Overview
                    </Typography>
                  }
                  subheader={
                    <Typography variant="subtitle1" fontWeight={"400"}>
                      Manage your course
                    </Typography>
                  }
                />
                <CardContent>
                  <Grid
                    container
                    spacing={3}
                    justifyContent={"space-between"}
                    direction={"column"}
                    size={{ xs: 12 }}
                  >
                    {accountId === data.creatorId && (
                      <Button
                        variant="contained"
                        startIcon={<EditIcon />}
                        onClick={() => setOpen(true)}
                      >
                        Edit Course
                      </Button>
                    )}
                    <Button
                      variant="outlined"
                      sx={{ "&:hover": { backgroundColor: "secondary.dark" } }}
                      component={Link}
                      to={`/courses/${data._id}/`}
                      startIcon={<PublicIcon />}
                    >
                      View Public Page
                    </Button>
                    {accountId === data.creatorId && (
                      <Button
                        color="error"
                        variant="contained"
                        startIcon={<DeleteIcon />}
                        sx={{ "&:hover": { backgroundColor: "error.light" } }}
                        onClick={() => setDeleteModalOpen(true)}
                      >
                        Delete Course
                      </Button>
                    )}
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid>
            <SwitchView course={data} />
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default AdminDetails;
