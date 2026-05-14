import axios from "axios";
import { clearAuth, getToken } from "../utils/auth";

const baseURL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const API = axios.create({
  baseURL: baseURL.replace(/\/$/, ""),
});

API.interceptors.request.use((req) => {
  const token = getToken();

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

API.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response?.status === 401) {
      clearAuth();
    }

    return Promise.reject(error);
  },
);

export const loginAdmin = (data) => API.post("/auth/login", data);

export const getProjects = () => API.get("/projects");
export const addProject = (data) => API.post("/projects", data);
export const deleteProject = (id) => API.delete(`/projects/${id}`);

export const getSkills = () => API.get("/skills");
export const addSkill = (data) => API.post("/skills", data);
export const deleteSkill = (id) => API.delete(`/skills/${id}`);

export const sendContact = (data) => API.post("/contact", data);

export const addReview = (data) => API.post("/reviews", data);
export const getReviews = () => API.get("/reviews");
export const getApprovedReviews = () => API.get("/reviews/approved");
export const updateReview = (id, data) => API.put(`/reviews/${id}`, data);
export const deleteReview = (id) => API.delete(`/reviews/${id}`);

export default API;
