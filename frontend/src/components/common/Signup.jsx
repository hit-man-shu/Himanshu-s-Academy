import {
  Avatar,
  Box,
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import Input from "./Input";
import {
  Form,
  Link,
  redirect,
  useActionData,
  useLocation,
  useNavigation,
} from "react-router-dom";
import PhonelinkLockIcon from "@mui/icons-material/PhonelinkLock";
import { signUpHandler } from "../utils/api";
import { ErrorBlock } from "../Error/ErrorBlock";

const Signup = () => {
  const actionData = useActionData();
  const { state } = useNavigation();
  const location = useLocation();
  const isAdmin = location.pathname.includes("admin");
  const isSubmitting = state === "submitting";
  return (
    <Paper
      elevation={0}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "94vh",
        backgroundColor: "secondary.main",
        boxShadow: 0,
        borderRadius: 0,
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 400,
          mx: "auto",
          p: 4,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: "background.paper",
        }}
      >
        <Avatar sx={{ mx: "auto" }}>
          <PhonelinkLockIcon color="primary" />
        </Avatar>
        <Typography variant="h5" align="center" gutterBottom>
          {isAdmin ? "Admin Sign Up" : "Sign Up"}
        </Typography>
        {actionData?.message && <ErrorBlock title={actionData.message} />}
        {actionData?.errors && (
          <List sx={{ color: "error.main", pl: 2, fontWeight: "700" }} dense>
            {actionData?.errors.map((e, i) => (
              <ListItem key={i} disablePadding>
                <ListItemText primary={`• ${e.message}`} />
              </ListItem>
            ))}
          </List>
        )}
        <Form method="POST">
          <input type="hidden" name="role" value={isAdmin ? "admin" : "user"} />
          <Input
            label="Name"
            id="username"
            name="username"
            type="text"
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <Input
            label="Email"
            id="email"
            name="email"
            type="email"
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <Input
            label="Password"
            id="password"
            name="password"
            type="password"
            fullWidth
            margin="normal"
            variant="outlined"
          />

          <Grid container direction="column" spacing={2}>
            <Typography
              component={Link}
              variant="body2"
              to={isAdmin ? "/admin/login" : "/login"}
              sx={{
                textDecoration: "none",
                color: "primary.main",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              login to your account
            </Typography>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              loading={isSubmitting}
              disabled={isSubmitting}
            >
              {!isSubmitting ? "Sign Up" : "Submitting..."}
            </Button>
          </Grid>
        </Form>
      </Box>
    </Paper>
  );
};

export default Signup;

export const signUpAction = async ({ request }) => {
  try {
    const data = await request.formData();
    const { username, email, password, role } = Object.fromEntries(
      data.entries()
    );
    const isAdmin = role === "admin";
    const endpoint = isAdmin ? "/admin/signup" : "/user/signup";
    await signUpHandler(endpoint, { username, email, password });
    return redirect(isAdmin ? "/admin/login" : "/login");
  } catch (error) {
    return {
      errors: error?.response?.data?.errors,
      message: error?.response?.data?.message,
    };
  }
};
