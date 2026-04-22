import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL ,
});

// 🔐 TOKEN
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

// 🔐 AUTH API
export const loginAdmin = (data) => API.post("/auth/login", data);

// 🔥 PROJECT
export const getProjects = () => API.get("/projects");
export const addProject = (data) => API.post("/projects", data);
export const deleteProject = (id) => API.delete(`/projects/${id}`);


// 🔥 SKILLS
export const getSkills = () => API.get("/skills");
export const addSkill = (data) => API.post("/skills", data);
export const deleteSkill = (id) => API.delete(`/skills/${id}`);


// 🔥 CONTACT
export const sendContact = (data) => API.post("/contact", data);



// 🔥 REVIEWS
export const addReview = (data) => API.post("/reviews", data);
export const getReviews = () => API.get("/reviews");
export const getApprovedReviews = () => API.get("/reviews/approved");
export const updateReview = (id, data) => API.put(`/reviews/${id}`, data);
export const deleteReview = (id) => API.delete(`/reviews/${id}`);


export default API;
