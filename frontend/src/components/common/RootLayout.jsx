import { AppBar, Box, Button, Grid, Toolbar, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import React from "react";
import {
  Link,
  NavLink,
  Outlet,
  useRouteLoaderData,
  useSubmit,
} from "react-router-dom";
import SchoolIcon from "@mui/icons-material/School";
import Footer from "./Footer";

const RootLayout = () => {
  const { token } = useRouteLoaderData("token");
  const submit = useSubmit();

  const handleLogout = () => {
    submit(null, { action: "/logout", method: "post" });
  };

  return (
    <>
      <AppBar position="fixed" sx={{ borderRadius: 0 }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Grid container gap={3}>
            <Grid
              container
              sx={{
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
              }}
              spacing={1}
              color="text.primary"
              component={Link}
              to="/"
            >
              <SchoolIcon />
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Himanshu's Academy
              </Typography>
            </Grid>
            {token && (
              <>
                <Grid
                  container
                  sx={{
                    textDecoration: "none",
                    alignItems: "center",
                    justifyContent: "center",
                    "&.active": {
                      "& .MuiTypography-root": {
                        fontWeight: "bold",
                        borderBottom: "2px solid",
                      },
                    },
                  }}
                  color="text.primary"
                  component={NavLink}
                  to="/courses"
                  end
                >
                  <Typography variant="body2">Courses</Typography>
                </Grid>
                <Grid
                  container
                  sx={{
                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none",
                    "&.active": {
                      "& .MuiTypography-root": {
                        fontWeight: "bold",
                        borderBottom: "2px solid",
                      },
                    },
                  }}
                  spacing={1}
                  color="text.primary"
                  component={NavLink}
                  to="/my-courses"
                  end
                >
                  <Typography variant="body2">My Courses</Typography>
                </Grid>
                <Grid
                  container
                  sx={{
                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none",
                    "&.active": {
                      "& .MuiTypography-root": {
                        fontWeight: "bold",
                        borderBottom: "2px solid",
                      },
                    },
                  }}
                  spacing={1}
                  color="text.primary"
                  component={NavLink}
                  to="/about"
                  end
                >
                  <Typography variant="body2">About</Typography>
                </Grid>
              </>
            )}
          </Grid>

          <Box sx={{ display: "flex", gap: 2 }}>
            {!token ? (
              <>
                <Button
                  color="primary"
                  component={Link}
                  variant="outlined"
                  to="signup"
                  size="small"
                  sx={{
                    "&:hover": { backgroundColor: "text.disabled" },
                  }}
                >
                  Signup
                </Button>
                <Button
                  color="primary"
                  component={Link}
                  to="login"
                  variant="contained"
                  size="small"
                >
                  Login
                </Button>
              </>
            ) : (
              <Button
                onClick={handleLogout}
                color="primary"
                type="submit"
                sx={{
                  backgroundColor: "red",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#c1121f",
                  },
                }}
                endIcon={<LogoutIcon fontSize="small" />}
              >
                Logout
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          px: 6,
          mt: 8,
          height: "100%",
          backgroundColor: "background.paper",
          overflowY: "auto",
        }}
        component="main"
      >
        <Outlet />
      </Box>

      <Footer />
    </>
  );
};

export default RootLayout;
