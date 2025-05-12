import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./components/utils/utils";
import { RouterProvider, createBrowserRouter } from "react-router";
import { userRoute } from "./components/routes/UserRoute";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme";
import { adminRoute } from "./components/routes/AdminRoute";

const App = () => {
  const router = createBrowserRouter([userRoute, adminRoute]);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
