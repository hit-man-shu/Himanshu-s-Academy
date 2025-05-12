import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import React from "react";
import { ErrorBlock } from "../Error/ErrorBlock";

const ConfirmModal = ({
  open,
  onClose,
  children,
  isLoading,
  handleSubmit,
  error,
  isError,
}) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold" }}
          color="error"
          gutterBottom
        >
          Confirm the Action!
        </Typography>
      </DialogTitle>

      {isError && (
        <ErrorBlock
          title={error?.response?.data?.errors || "Something went wrong!"}
          description={error?.response?.data?.message}
        />
      )}

      <DialogContent>
        <Typography color="text.secondary" variant="body1">
          {children}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={onClose}
          color="primary"
          disabled={isLoading}
          sx={{ "&:hover": { backgroundColor: "secondary.dark" } }}
        >
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          disabled={isLoading}
          loading={isLoading}
          color="primary"
          variant="contained"
        >
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmModal;
