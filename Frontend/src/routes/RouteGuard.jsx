import { useLocation } from "react-router-dom";

export default function RouteGuard({ children }) {
  const location = useLocation();

  const publicRoutes = ["/", "/about", "/projects", "/contact"];
  const adminRoutes = [
    "/admin",
    "/admin/projects",
    "/admin/clients",
    "/admin/reviews",
    "/admin/messages",
  ];

  const isPublic = publicRoutes.includes(location.pathname);
  const isAdmin =
    adminRoutes.includes(location.pathname) ||
    location.pathname.startsWith("/admin/");
  const isLogin = location.pathname === "/admin/login";

  const isValid = isPublic || isAdmin || isLogin;

  // ❌ INVALID ROUTE → BLANK SCREEN
  if (!isValid) return null;

  return children;
}