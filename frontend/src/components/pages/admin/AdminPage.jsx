import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

const AdminPage = ({ accountEmail, accountName, courses }) => {
  return (
    <Card sx={{ padding: 2 }}>
      <CardHeader
        avatar={<Avatar />}
        title={
          <Grid container spacing={2} alignItems={"center"}>
            <Typography fontWeight={"bold"} variant="subtitle1">
              Hii {accountName}
            </Typography>
            <Chip label="Admin" filled size="small" color="primary" />
          </Grid>
        }
      />

      <CardContent>
        <Grid
          container
          spacing={2}
          alignItems={"center"}
          justifyContent={"space-between"}
          size={{ xs: 12, sm: 6 }}
        >
          <Grid size={{ xs: 12, sm: 6 }}>
            <Typography variant="subtitle2">Eamil</Typography>
            <Typography variant="subtitle1" fontWeight={"bold"}>
              {accountEmail}
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Typography variant="subtitle2">Courses</Typography>
            <Typography variant="subtitle1" fontWeight={"bold"}>
              {courses}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default AdminPage;
