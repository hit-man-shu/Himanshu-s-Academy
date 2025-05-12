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
import { useRef } from "react";
import CourseForm from "./CourseForm";
import { useMutation } from "@tanstack/react-query";
import { createCourse } from "../../utils/api";
import { queryClient } from "../../utils/utils";
import { ErrorBlock } from "../../Error/ErrorBlock";

const CreateAdminCourse = ({ open, onClose }) => {
  const { mutate, isError, error, isPending } = useMutation({
    mutationFn: createCourse,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["admin"],
      });
      queryClient.invalidateQueries({
        queryKey: ["admins"],
      });
      onClose();
    },
  });
  const createCourseRef = useRef(null);

  const handleSubmit = () => {
    if (createCourseRef.current) {
      createCourseRef.current.dispatchEvent(
        new Event("submit", { cancelable: true, bubbles: true })
      );
    }
  };

  const handleFormDataSubmit = (formData) => {
    mutate(formData);
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>Create New Course</DialogTitle>

      {isError && <ErrorBlock title={error?.response?.data?.message} />}

      {error?.message && (
        <List sx={{ color: "error.main", pl: 2, fontWeight: "700" }} dense>
          {error?.response?.data?.errors.map((e, i) => (
            <ListItem key={i} disablePadding>
              <ListItemText primary={`• ${e.message}`} />
            </ListItem>
          ))}
        </List>
      )}

      <DialogContent>
        <CourseForm onSubmit={handleFormDataSubmit} ref={createCourseRef} />
      </DialogContent>

      <DialogActions>
        <Button
          variant="text"
          sx={{ "&:hover": { backgroundColor: "secondary.dark" } }}
          onClick={onClose}
          disabled={isPending}
          color="text.secondary"
        >
          Cancel
        </Button>
        <Button loading={isPending} onClick={handleSubmit} variant="contained">
          Save Course
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateAdminCourse;
