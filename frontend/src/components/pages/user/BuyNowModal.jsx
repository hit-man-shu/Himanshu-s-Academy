import { Backdrop, Box, Button, Fade, Modal, Typography } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { purchaseCourse } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import { ErrorBlock } from "../../Error/ErrorBlock";

const BuyNowModal = ({ open, onClose, course }) => {
  const navigate = useNavigate();

  const { isError, isPending, mutate, error, reset } = useMutation({
    mutationFn: purchaseCourse,
    onSuccess: () => {
      onClose();
      navigate("/courses", { replace: true });
    },
  });

  useEffect(() => {
    if (!open) {
      reset();
    }
  }, [open, reset]);

  const handleConfirmPurchase = () => {
    mutate({ courseId: course._id });
  };

  return (
    <Modal open={open} onClose={onClose} closeAfterTransition>
      <Fade in={open}>
        <Box
          sx={{
            maxWidth: 400,
            mx: "auto",
            mt: "20vh",
            bgcolor: "white",
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
          }}
        >
          {isError && (
            <ErrorBlock
              title={error?.message || "Something went wrong!"}
              description={error?.response?.data?.message}
            />
          )}
          {!isError && (
            <>
              <Typography variant="h6" gutterBottom>
                Confirm Purchase
              </Typography>
              <Typography variant="body1" mb={2}>
                Are you sure you want to buy <strong>{course.title}</strong>?
              </Typography>
            </>
          )}

          <Box
            sx={{ display: "flex", justifyContent: "flex-end", gap: 2, py: 2 }}
          >
            <Button
              onClick={onClose}
              color="primary"
              disabled={isPending}
              sx={{ "&:hover": { backgroundColor: "secondary.dark" } }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={handleConfirmPurchase}
              disabled={isError}
              loading={isPending}
              loadingPosition="end"
            >
              {isPending ? "Processing..." : "Confirm"}
            </Button>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export default BuyNowModal;
