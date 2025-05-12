import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import React, { useState } from "react";
import { Link, Outlet, useRouteLoaderData, useSubmit } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import CreateAdminCourse from "../pages/admin/CreateAdminCourse";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import AdminSidebar from "../pages/admin/AdminSidebar";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import Footer from "./Footer";

export default function AdminRootLayout() {
  const [open, setOpen] = useState(false);
  const { adminToken } = useRouteLoaderData("adminToken");
  const submit = useSubmit();
  const handleAdminLogout = () => {
    submit(null, { action: "/admin/logout", method: "post" });
  };

  return (
    <>
      <AppBar
        color="default"
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, borderRadius: 0 }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <AdminPanelSettingsIcon />
            <Typography
              variant="body1"
              sx={{ textDecoration: "none", fontWeight: "bold" }}
              component={Link}
              color="text.primary"
              to="/admin"
            >
              Himanshu's Academy Admin Panel
            </Typography>
          </Box>

          <Box sx={{ display: "flex", gap: 2 }}>
            {!adminToken ? (
              <>
                <Button
                  size="small"
                  component={Link}
                  color="primary"
                  variant="outlined"
                  sx={{ "&:hover": { backgroundColor: "text.disabled" } }}
                  to="signup"
                >
                  Signup
                </Button>
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  component={Link}
                  to="login"
                >
                  Login
                </Button>
              </>
            ) : (
              <>
                <Button
                  onClick={() => setOpen(true)}
                  startIcon={<AddIcon />}
                  variant="contained"
                  size="small"
                >
                  Create Course
                </Button>

                <Button
                  variant="outlined"
                  size="small"
                  component={Link}
                  to="/admin/all"
                  color="primary"
                  sx={{
                    "&:hover": { backgroundColor: "text.disabled" },
                  }}
                  startIcon={<SupervisorAccountIcon />}
                >
                  All Admin Courses
                </Button>

                <Button
                  onClick={handleAdminLogout}
                  type="submit"
                  size="small"
                  color="secondary"
                  sx={{
                    backgroundColor: "error.main",
                    "&:hover": { backgroundColor: "error.dark" },
                  }}
                  endIcon={<LogoutIcon fontSize="small" />}
                >
                  Logout
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      <CreateAdminCourse open={open} onClose={() => setOpen(false)} />

      <Box
        sx={{
          px: 6,
          mt: 6,
          height: "100%",
          display: "flex",
          backgroundColor: "#f5f5f5",
        }}
      >
        <AdminSidebar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            overflowY: "auto",
          }}
        >
          <Outlet />
        </Box>
      </Box>
      <Footer />
    </>
  );
}
