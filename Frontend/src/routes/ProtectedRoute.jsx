import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const expiry = localStorage.getItem("tokenExpiry");

 
  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }

  
  if (expiry && Date.now() > Number(expiry)) {
    localStorage.removeItem("token");
    localStorage.removeItem("tokenExpiry");

    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

export default ProtectedRoute;