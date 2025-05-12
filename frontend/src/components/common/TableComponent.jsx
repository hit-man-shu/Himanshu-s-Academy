import {
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useState } from "react";
import ConfirmModal from "./ConfirmModal";
import { useMutation } from "@tanstack/react-query";
import { adminDeleteCourse } from "../utils/api";
import { queryClient } from "../utils/utils";

const TableComponent = ({ course, accountId }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);
  const [confirmOpen, setConfirmOpen] = useState(false);
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

  const handleDelete = () => {
    mutate(confirmOpen);
  };

  const handleClick = (e, courseId) => {
    setAnchorEl(e.currentTarget);
    setSelectedRow(courseId);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedRow(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <ConfirmModal
        open={confirmOpen}
        onClose={() => setConfirmOpen(null)}
        error={error}
        isLoading={isPending}
        isError={isError}
        handleSubmit={handleDelete}
      >
        Are you sure you want to delete this course?
      </ConfirmModal>

      <TableContainer
        component={Paper}
        sx={{
          borderRadius: 4,
          boxShadow: 3,
          // maxHeight: 440,
          "&::-webkit-scrollbar": { width: 8 },
          "&::-webkit-scrollbar-thumb": {
            bgcolor: "primary.main",
            borderRadius: 2,
          },
        }}
      >
        <Table aria-label="courses table" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  bgcolor: "primary.main",
                  color: "common.white",
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              >
                Title
              </TableCell>
              <TableCell
                sx={{
                  bgcolor: "primary.main",
                  color: "common.white",
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              >
                Description
              </TableCell>
              <TableCell
                sx={{
                  bgcolor: "primary.main",
                  color: "common.white",
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              >
                Duration
              </TableCell>
              <TableCell
                sx={{
                  bgcolor: "primary.main",
                  color: "common.white",
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              >
                Price
              </TableCell>
              <TableCell
                sx={{
                  bgcolor: "primary.main",
                  color: "common.white",
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              ></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {course?.courses?.map((course) => (
              <TableRow
                key={course._id}
                hover
                sx={{
                  "&:nth-of-type(odd)": { bgcolor: "action.hover" },
                  "&:last-child td": { borderBottom: 0 },
                }}
              >
                <TableCell sx={{ fontWeight: 600, maxWidth: 200 }}>
                  <Typography variant="subtitle1">{course.title}</Typography>
                </TableCell>
                <TableCell sx={{ maxWidth: 400 }}>
                  <Typography variant="body2" color="text.secondary">
                    {course.description}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body1">{course.duration}</Typography>
                </TableCell>
                <TableCell sx={{ fontWeight: 600 }}>
                  <Typography variant="body1" color="primary">
                    ${course.price}
                  </Typography>
                </TableCell>
                <TableCell>
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
                    open={open && selectedRow === course._id}
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
                        <RemoveRedEyeIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="View" />
                    </MenuItem>
                    {accountId === course.creatorId && (
                      <MenuItem
                        onClick={() => setConfirmOpen(course._id)}
                        sx={{
                          color: "error.main",
                          "&:hover": {
                            bgcolor: "error.light",
                          },
                        }}
                      >
                        <ListItemIcon>
                          <DeleteIcon color="error" />
                        </ListItemIcon>
                        <ListItemText primary="Delete" />
                      </MenuItem>
                    )}
                  </Menu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TableComponent;
