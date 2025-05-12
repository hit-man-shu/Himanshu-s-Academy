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
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import { logInHandler } from "../utils/api";
import { ErrorBlock } from "../Error/ErrorBlock";

const Login = () => {
  const actionData = useActionData();
  const { state } = useNavigation();
  const location = useLocation();
  const isAdmin = location.pathname.includes("admin");
  const searchParams = new URLSearchParams(location.search);
  const from = decodeURIComponent(
    searchParams.get("from") ||
      location.state?.from ||
      (isAdmin ? "/admin" : "/")
  );

  const isSubmitting = state === "submitting";

  return (
    <Paper
      elevation={0}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "94vh",
        boxShadow: 0,
        backgroundColor: "secondary.main",
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
          <VpnKeyIcon color="primary" />
        </Avatar>
        <Typography variant="h5" align="center" gutterBottom>
          {isAdmin ? "Admin Login" : "Login"}
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
          <input type="hidden" name="redirectTo" value={from} />
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
              to={isAdmin ? "/admin/signup" : "/signup"}
              sx={{
                textDecoration: "none",
                color: "primary.main",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              create a new acccount
            </Typography>
            <Button
              type="submit"
              variant="contained"
              loading={isSubmitting}
              disabled={isSubmitting}
            >
              {!isSubmitting ? "Login" : "Submitting..."}
            </Button>
          </Grid>
        </Form>
      </Box>
    </Paper>
  );
};

export default Login;

export const loginAction = async ({ request }) => {
  try {
    const data = await request.formData();
    const formData = Object.fromEntries(data.entries());
    const { role, email, password, redirectTo } = formData;
    const isAdmin = role === "admin";
    const endpoint = isAdmin ? "/admin/login" : "/user/login";

    const resp = await logInHandler(endpoint, { email, password });
    const { token } = resp;

    if (isAdmin) {
      localStorage.setItem("adminToken", token);
    } else {
      localStorage.setItem("token", token);
    }
    localStorage.setItem("role", role);
    return redirect(redirectTo);
  } catch (error) {
    return {
      errors: error?.response?.data?.errors,
      message: error?.response?.data?.message,
    };
  }
};
