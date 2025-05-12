import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";

const drawerWidth = 240;

function AdminSidebar() {
  return (
    <>
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
        }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            [`& .MuiDrawer-paper`]: {
              boxSizing: "border-box",
              width: drawerWidth,
              height: "calc(100vh - 64px)",
              top: 64,
              borderRadius: 0,
            },
          }}
          anchor="left"
        >
          <List>
            <ListItemButton component={Link} to="/admin">
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText
                sx={{ textDecoration: "none", color: "text.secondary" }}
                primary="My Courses"
              />
            </ListItemButton>

            <ListItemButton component={Link} to="/admin/all">
              <ListItemIcon>
                <SupervisorAccountIcon />
              </ListItemIcon>
              <ListItemText
                sx={{ textDecoration: "none", color: "text.secondary" }}
                primary="All Admin Courses"
              />
            </ListItemButton>
          </List>
        </Drawer>
      </Box>
    </>
  );
}

export default AdminSidebar;
