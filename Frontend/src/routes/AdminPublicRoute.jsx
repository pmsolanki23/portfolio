import { Navigate } from "react-router-dom";

const AdminPublicRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  
  if (token) {
    return <Navigate to="/admin" replace />;
  }

  return children;
};

export default AdminPublicRoute;