/* eslint-disable no-useless-catch */
import { QueryClient } from "@tanstack/react-query";
import { redirect } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export const queryClient = new QueryClient();

const getAuthToken = () => {
  return {
    token: localStorage.getItem("token") || null,
    adminToken: localStorage.getItem("adminToken") || null,
    role: localStorage.getItem("role") || null,
  };
};

const isAdmin = () => {
  const { role } = getAuthToken();
  return role === "admin";
};

export const logoutAction = () => {
  if (isAdmin()) {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("role");
    return redirect("/admin/login");
  }
  localStorage.removeItem("token");
  localStorage.removeItem("role");
  return redirect("/login");
};

export const tokenLoader = () => {
  const { token, adminToken } = getAuthToken();
  return {
    token: token || null,
    adminToken: adminToken || null,
  };
};

export const checkAuthLoader =
  (requiredRole = "user") =>
  ({ request }) => {
    const { token, adminToken, role } = getAuthToken();
    const currentUrl = new URL(request.url.replace(/\/$/, ""));
    const currentPath = currentUrl.pathname + currentUrl.search;

    const isLoggedIn =
      requiredRole === "admin" ? Boolean(adminToken) : Boolean(token);

    if (!isLoggedIn || role !== requiredRole) {
      if (requiredRole === "admin") {
        localStorage.removeItem("token");
        return redirect(`/admin/login?from=${encodeURIComponent(currentPath)}`);
      } else {
        localStorage.removeItem("adminToken");
        return redirect(`/login?from=${encodeURIComponent(currentPath)}`);
      }
    }

    return null;
  };

export const getUserDataFromToken = (token) => {
  try {
    const decoded = jwtDecode(token);
    return decoded;
  } catch (error) {
    throw error;
  }
};
