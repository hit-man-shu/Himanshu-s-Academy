import AdminRootLayout from "../common/AdminRootLayout";
import Login, { loginAction } from "../common/Login";
import Signup, { signUpAction } from "../common/Signup";
import ErrorPage from "../Error/ErrorPage";
import AdminDashboard from "../pages/admin/AdminDashboard";
import AdminDetails from "../pages/admin/AdminDetails";
import AllAdminDashboard from "../pages/admin/AllAdminDashboard";
import { checkAuthLoader, logoutAction, tokenLoader } from "../utils/utils";

export const adminRoute = {
  path: "/admin",
  element: <AdminRootLayout />,
  id: "adminToken",
  loader: tokenLoader,
  errorElement:<ErrorPage/>,
  children: [
    {
      index: true,
      element: <AdminDashboard />,
      loader: checkAuthLoader("admin"),
    },
    {
      path: ":adminId",
      element: <AdminDetails />,
      exact: true,
    },
    {
      path: "all",
      children: [
        {
          index: true,
          exact: true,
          element: <AllAdminDashboard />,
          loader: checkAuthLoader("admin"),
        },
        {
          path: ":adminId",
          element: <AdminDetails />,
          exact: true,
        },
      ],
    },
    {
      path: "signup",
      element: <Signup />,
      action: signUpAction,
    },
    {
      path: "login",
      element: <Login />,
      action: loginAction,
    },
    {
      path: "logout",
      action: logoutAction,
    },
  ],
};
