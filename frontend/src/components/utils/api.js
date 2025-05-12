/* eslint-disable no-useless-catch */
import axios from "axios";
const BASE_URL = import.meta.env.VITE_BACKEND_API_URL;

export const signUpHandler = async (endpoint, formData) => {
  try {
    const resp = await axios.post(`${BASE_URL}${endpoint}`, formData);
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const logInHandler = async (endpoint, formData) => {
  try {
    const resp = await axios.post(`${BASE_URL}${endpoint}`, formData);
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const fetchAllCourses = async ({ signal }) => {
  try {
    const resp = await axios.get(`${BASE_URL}/course`, { signal });
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const fetchSingleCourse = async ({ courseId, signal }) => {
  try {
    const resp = await axios.get(`${BASE_URL}/course/${courseId}`, {
      signal,
    });
    return resp.data?.course;
  } catch (error) {
    throw error;
  }
};

//user
export const purchaseCourse = async ({ courseId }) => {
  try {
    const resp = await axios.post(
      `${BASE_URL}/user/purchase`,
      { courseId },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const fetchMyCourse = async ({ signal }) => {
  try {
    const resp = await axios.get(`${BASE_URL}/user/my/courses`, {
      headers: {
        signal,
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const fetchAdminCourses = async ({ signal }) => {
  try {
    const resp = await axios.get(`${BASE_URL}/admin/bulk`, {
      signal,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
      },
    });
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const adminUpdateCourse = async (formData) => {
  try {
    const resp = await axios.put(
      `${BASE_URL}/admin/edit`,
      { ...formData, price: Number(formData.price) },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
        },
      }
    );
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const createCourse = async (formData) => {
  try {
    const resp = await axios.post(
      `${BASE_URL}/admin/create`,
      { ...formData, price: Number(formData.price) },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
        },
      }
    );
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const adminDeleteCourse = async (courseId) => {
  try {
    const resp = await axios.delete(`${BASE_URL}/admin/${courseId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
      },
    });
    return resp.data;
  } catch (error) {
    throw error;
  }
};
