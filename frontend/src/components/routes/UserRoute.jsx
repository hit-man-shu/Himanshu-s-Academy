import Login, { loginAction } from "../common/Login";
import RootLayout from "../common/RootLayout";
import Signup, { signUpAction } from "../common/Signup";
import ErrorPage from "../Error/ErrorPage";
import About from "../pages/user/About";
import Courses from "../pages/user/Courses";
import CoursesDetails from "../pages/user/CoursesDetails";
import LandingPage from "../pages/user/LandingPage";
import MyCourses from "../pages/user/MyCourses";
import { checkAuthLoader, logoutAction, tokenLoader } from "../utils/utils";

export const userRoute = {
  path: "/",
  element: <RootLayout />,
  id: "token",
  loader: tokenLoader,
  children: [
    {
      index: true,
      element: <LandingPage />,
    },
    {
      path: "courses",
      children: [
        {
          index: true,
          element: <Courses />,
          loader: checkAuthLoader("user"),
        },
        {
          path: ":id",
          element: <CoursesDetails />,
          loader: checkAuthLoader("user"),
        },
      ],
    },
    {
      path: "about",
      element: <About />,
      loader: checkAuthLoader("user"),
    },
    {
      path: "my-courses",
      element: <MyCourses />,
      loader: checkAuthLoader("user"),
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
