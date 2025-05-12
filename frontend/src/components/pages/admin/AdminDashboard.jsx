import React, { useState } from "react";
import GridViewIcon from "@mui/icons-material/GridView";
import ViewListIcon from "@mui/icons-material/ViewList";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import AdminPage from "./AdminPage";
import CardView from "./CardView";
import ListView from "./ListView";
import { useQuery } from "@tanstack/react-query";
import { fetchAdminCourses } from "../../utils/api";
import CourseLoader from "../../common/CourseLoader";
import { ErrorBlock } from "../../Error/ErrorBlock";
import { getUserDataFromToken } from "../../utils/utils";
import { useRouteLoaderData } from "react-router-dom";

const AdminDashboard = () => {
  const [view, setView] = useState("card");
  const { adminToken } = useRouteLoaderData("adminToken");
  const { accountId, accountName, accountEmail } =
    getUserDataFromToken(adminToken);

  const {
    data = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["admin"],
    queryFn: ({ signal }) => fetchAdminCourses({ signal }),
  });

  let content;

  if (isLoading) {
    content = <CourseLoader />;
  }

  if (isError) {
    content = (
      <ErrorBlock
        title={error?.response?.data?.errors || "Something went wrong!"}
        description={error?.response?.data?.message}
      />
    );
  }

  if (data) {
    content = (
      <Grid container spacing={3}>
        {view === "card" ? (
          <CardView course={data} accountId={accountId} />
        ) : (
          <ListView course={data} accountId={accountId} />
        )}
      </Grid>
    );
  }

  if (Array.isArray(data?.courses) && data?.courses?.length === 0) {
    content = (
      <Typography
        variant="h5"
        fontWeight={"bold"}
        textAlign={"center"}
        color="error"
      >
        No courses found. Please create a course.
      </Typography>
    );
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", marginTop: 6 }}>
        My Courses
      </Typography>

      <AdminPage
        accountEmail={accountEmail}
        accountName={accountName}
        courses={data?.courses?.length || 0}
      />

      <Card sx={{ padding: 2 }}>
        <CardHeader
          title={
            <Typography variant="h5" gutterBottom fontWeight={"bold"}>
              Manage Courses.
            </Typography>
          }
          subheader={
            <Typography variant="body1" fontWeight={"semi-bold"}>
              Manage your created courses, edit content, and track performance.
            </Typography>
          }
          action={
            <>
              <ToggleButtonGroup
                color="primary"
                exclusive
                aria-label="View toggle"
                value={view}
                onChange={(event, newAlignment) => {
                  setView(newAlignment);
                }}
              >
                <ToggleButton value="card">
                  <GridViewIcon />
                </ToggleButton>

                <ToggleButton value="list">
                  <ViewListIcon />
                </ToggleButton>
              </ToggleButtonGroup>
            </>
          }
        />
        <CardContent>{content}</CardContent>
      </Card>
    </Box>
  );
};

export default AdminDashboard;
