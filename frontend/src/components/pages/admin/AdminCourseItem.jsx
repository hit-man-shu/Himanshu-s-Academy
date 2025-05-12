import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import DeleteIcon from "@mui/icons-material/Delete";
import ConfirmModal from "../../common/ConfirmModal";
import { useMutation } from "@tanstack/react-query";
import { adminDeleteCourse } from "../../utils/api";
import { queryClient } from "../../utils/utils";

const AdminCourseItem = ({ course, accountId }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [selectedrow, setSelectedrow] = useState(null);
  const open = Boolean(anchorEl);

  const { mutate, isError, error, isPending } = useMutation({
    mutationFn: adminDeleteCourse,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["admin"],
      });
      queryClient.invalidateQueries({
        queryKey: ["admins"],
      });
      setConfirmOpen(false);
    },
  });

  const handleClick = (event, courseId) => {
    setAnchorEl(event.currentTarget);
    setSelectedrow(courseId);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedrow(null);
  };

  const handleDelete = () => {
    mutate(course._id);
  };

  return (
    <>
      <ConfirmModal
        open={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        error={error}
        isLoading={isPending}
        isError={isError}
        handleSubmit={handleDelete}
      >
        Are you sure you want to delete this course?
      </ConfirmModal>

      <Grid size={{ xs: 12, sm: 12, md: 6, lg: 4 }} key={course._id}>
        <Card sx={{ borderRadius: 3, boxShadow: 4 }}>
          <CardMedia
            component="img"
            height="150"
            image={course.image}
            alt={course.title}
          />
          <CardContent>
            <Grid container direction={"column"} spacing={3}>
              <Grid container spacing={0}>
                <Grid size={{ md: 10 }}>
                  <Typography
                    variant="h6"
                    sx={{ minHeight: "66px" }}
                    fontWeight="bold"
                  >
                    {course.title}
                  </Typography>
                </Grid>

                <Grid size={{ md: 2 }}>
                  <IconButton
                    onClick={(e) => handleClick(e, course._id)}
                    sx={{
                      "&:hover": {
                        bgcolor: "primary.dark",
                        color: "primary.contrastText",
                      },
                    }}
                  >
                    <MoreHorizIcon />
                  </IconButton>
                  <Menu
                    open={open && selectedrow === course._id}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{ vertical: "top", horizontal: "right" }}
                    transformOrigin={{ vertical: "top", horizontal: "right" }}
                  >
                    <MenuItem
                      component={Link}
                      to={`${course._id}`}
                      sx={{ "&:hover": { bgcolor: "text.disabled" } }}
                    >
                      <ListItemIcon>
                        <RemoveRedEyeIcon />
                      </ListItemIcon>
                      <ListItemText primary="View" />
                    </MenuItem>
                    {accountId === course.creatorId && (
                      <MenuItem
                        sx={{
                          color: "error.main",
                          "&:hover": {
                            bgcolor: "error.light",
                          },
                        }}
                        onClick={() => setConfirmOpen(true)}
                      >
                        <ListItemIcon>
                          <DeleteIcon color="error" />
                        </ListItemIcon>
                        <ListItemText primary="Delete" />
                      </MenuItem>
                    )}
                  </Menu>
                </Grid>
              </Grid>

              <Typography
                sx={{ minHeight: "80px" }}
                variant="body2"
                color="text.secondary"
              >
                {course.description}
              </Typography>

              <Grid container spacing={6} size={{ xs: 12 }}>
                <Grid>
                  <Typography variant="body2" fontWeight="500">
                    Duration
                  </Typography>
                  <Typography variant="body1" fontWeight={"600"}>
                    {course.duration}
                  </Typography>
                </Grid>

                <Grid>
                  <Typography variant="body2" fontWeight="500">
                    Price
                  </Typography>
                  <Typography variant="body1" fontWeight={"600"}>
                    ${course.price}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default AdminCourseItem;
