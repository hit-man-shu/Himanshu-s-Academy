import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import React, { useRef } from "react";
import CourseForm from "./CourseForm";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { adminUpdateCourse, fetchSingleCourse } from "../../utils/api";
import { ErrorBlock } from "../../Error/ErrorBlock";
import { queryClient } from "../../utils/utils";
import Loader from "../../common/Loader";

const AdminCourseEdit = ({ open, onClose }) => {
  const { adminId } = useParams();
  const formRef = useRef(null);
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["singleCourse", { adminId }],
    queryFn: ({ signal }) => fetchSingleCourse({ courseId: adminId, signal }),
  });

  const {
    mutate,
    isError: isUpdateError,
    isPending: isUpdatePending,
    error: updateError,
  } = useMutation({
    mutationFn: adminUpdateCourse,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["singleCourse", { adminId }],
      });
      onClose();
    },
  });

  if (isLoading) {
    return <Loader />;
  }

  const handleSubmit = () => {
    if (formRef.current) {
      formRef.current.dispatchEvent(
        new Event("submit", { cancelable: true, bubbles: true })
      );
    }
  };

  const handleFormSubmit = (formData) => {
    mutate({ ...formData, _id: data._id });
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Edit Course</DialogTitle>

      {isError && (
        <ErrorBlock
          title={error?.response?.data?.errors || "Something went wrong!"}
          description={error?.response?.data?.message}
        />
      )}

      {isUpdateError && (
        <ErrorBlock title={updateError.response?.data?.message} />
      )}
      {updateError?.message && (
        <List sx={{ color: "error.main", pl: 2, fontWeight: "700" }} dense>
          {updateError?.response?.data?.errors.map((e, i) => (
            <ListItem key={i} disablePadding>
              <ListItemText primary={`• ${e.message}`} />
            </ListItem>
          ))}
        </List>
      )}

      <DialogContent>
        <CourseForm
          ref={formRef}
          inputData={data}
          onSubmit={handleFormSubmit}
        />
      </DialogContent>

      <DialogActions>
        <Button
          onClick={onClose}
          color="primary"
          disabled={isUpdatePending}
          sx={{ "&:hover": { backgroundColor: "secondary.dark" } }}
        >
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          disabled={isUpdatePending}
          loading={isUpdatePending}
          color="primary"
          variant="contained"
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AdminCourseEdit;
