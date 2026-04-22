
// // import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// // import Navbar from "./components/layout/Navbar";
// // import Footer from "./components/layout/Footer";
// // import { Toaster } from "react-hot-toast";

// // import AdminLayout from "./pages/admin/AdminLayout";
// // import Dashboard from "./pages/admin/Dashboard";
// // import Projects from "./pages/admin/Projects";
// // import Clients from "./pages/admin/Clients";
// // import Reviews from "./pages/admin/Reviews";

// // import Home from "./pages/Home";
// // import About from "./pages/About";
// // import ProjectsPage from "./pages/ProjectsPage";
// // import Login from "./pages/Login";
// // import ContactPage from "./pages/ContactPage";

// // import Cursor from "./components/ui/Cursor";
// // import ScrollToTop from "./components/ScrollToTop";

// // import RouteGuard from "./routes/RouteGuard";
// // import AdminPublicRoute from "./routes/AdminPublicRoute";
// // import ProtectedRoute from "./routes/ProtectedRoute";
// // import Loader from "./components/ui/Loader";
// // import { useEffect, useState } from "react";
// // import LogoStroke from "./components/ui/LogoStroke";

// // function LayoutWrapper() {
// //   const location = useLocation();
// //   const isAdmin = location.pathname.startsWith("/admin");

// //   return (
// //     <RouteGuard>
// //       <Cursor />
// //       <Navbar />
// //       <ScrollToTop />

// //       {/* NAVBAR SPACE */}
// //       <div className="pt-20">
// //         <Routes>

// //           {/* 🔥 ADMIN */}
// //           <Route
// //             path="/admin"
// //             element={
// //               <ProtectedRoute>
// //                 <AdminLayout />
// //               </ProtectedRoute>
// //             }
// //           >
// //             <Route index element={<Dashboard />} />
// //             <Route path="projects" element={<Projects />} />
// //             <Route path="clients" element={<Clients />} />
// //             <Route path="reviews" element={<Reviews />} />

// //             {/* ❌ INVALID ADMIN */}
// //             <Route path="*" element={null} />
// //           </Route>

// //           {/* 🔐 LOGIN */}
// //           <Route
// //             path="/admin/login"
// //             element={
// //               <AdminPublicRoute>
// //                 <Login />
// //               </AdminPublicRoute>
// //             }
// //           />

// //           {/* 🌐 PUBLIC */}
// //           <Route path="/" element={<Home />} />
// //           <Route path="/about" element={<About />} />
// //           <Route path="/projects" element={<ProjectsPage />} />
// //           <Route path="/contact" element={<ContactPage />} />

// //           {/* ❌ INVALID GLOBAL */}
// //           <Route path="*" element={null} />

// //         </Routes>
// //       </div>

// //       {/* FOOTER */}
// //       {!isAdmin && <Footer />}
// //     </RouteGuard>
// //   );
// // }

// // function App() {
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     setTimeout(() => {
// //       setLoading(false);
// //     }, 2000); // 2 sec loader
// //   }, []);

// //   if (loading) return <LogoStroke />;

// //   return (
// //     <Router>
// //       <LayoutWrapper />
// //       <Toaster />
// //     </Router>
// //   );
// // }

// // export default App;

// // import {
// //   BrowserRouter as Router,
// //   Routes,
// //   Route,
// //   useLocation,
// // } from "react-router-dom";
// // import { useEffect, useState } from "react";

// // import Navbar from "./components/layout/Navbar";
// // import Footer from "./components/layout/Footer";
// // import Cursor from "./components/ui/Cursor";
// // import ScrollToTop from "./components/ScrollToTop";
// // import { Toaster } from "react-hot-toast";

// // import AdminLayout from "./pages/admin/AdminLayout";
// // import Dashboard from "./pages/admin/Dashboard";
// // import Projects from "./pages/admin/Projects";
// // import Clients from "./pages/admin/Clients";
// // import Reviews from "./pages/admin/Reviews";

// // import Home from "./pages/Home";
// // import About from "./pages/About";
// // import ProjectsPage from "./pages/ProjectsPage";
// // import Login from "./pages/Login";
// // import ContactPage from "./pages/ContactPage";

// // import RouteGuard from "./routes/RouteGuard";
// // import AdminPublicRoute from "./routes/AdminPublicRoute";
// // import ProtectedRoute from "./routes/ProtectedRoute";

// // import LogoStroke from "./components/ui/LogoStroke";
// // import ReviewAdmin from "./pages/admin/Reviews";

// // // 🔥 LAYOUT WRAPPER
// // function LayoutWrapper() {
// //   const location = useLocation();
// //   const isAdmin = location.pathname.startsWith("/admin");

// //   return (
// //     <RouteGuard>
// //       <Cursor />
// //       <ScrollToTop />

// //       {/* NAVBAR only for public */}
// //       {!isAdmin && <Navbar />}

// //       <div className={!isAdmin ? "pt-20" : ""}>
// //         <Routes>
// //           {/* 🔐 ADMIN PANEL */}
// //           <Route
// //             path="/admin"
// //             element={
// //               <ProtectedRoute>
// //                 <AdminLayout />
// //               </ProtectedRoute>
// //             }
// //           >
// //             <Route index element={<Dashboard />} />
// //             <Route path="projects" element={<Projects />} />
// //             <Route path="clients" element={<Clients />} />
// //             <Route path="reviews" element={<Reviews />} />
// //             <Route path="reviews" element={<ReviewAdmin />} />
// //             <Route path="*" element={null} />
// //           </Route>

// //           {/* 🔐 ADMIN LOGIN */}
// //           <Route
// //             path="/admin/login"
// //             element={
// //               <AdminPublicRoute>
// //                 <Login />
// //               </AdminPublicRoute>
// //             }
// //           />

// //           {/* 🌐 PUBLIC ROUTES */}
// //           <Route path="/" element={<Home />} />
// //           <Route path="/about" element={<About />} />
// //           <Route path="/projects" element={<ProjectsPage />} />
// //           <Route path="/contact" element={<ContactPage />} />

// //           {/* ❌ FALLBACK */}
// //           <Route path="*" element={null} />
// //         </Routes>
// //       </div>

// //       {/* FOOTER only public */}
// //       {!isAdmin && <Footer />}
// //     </RouteGuard>
// //   );
// // }

// // // 🔥 MAIN APP
// // function App() {
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     // simulate loading (replace with real if needed)
// //     const timer = setTimeout(() => {
// //       setLoading(false);
// //     }, 2000);

// //     return () => clearTimeout(timer);
// //   }, []);

// //   return (
// //     <Router>
// //       {/* 🔥 LOADER OVERLAY */}
// //       {loading && <LogoStroke />}

// //       {/* 🔥 MAIN CONTENT */}
// //       {!loading && (
// //         <>
// //           <LayoutWrapper />
// //           <Toaster />
// //         </>
// //       )}
// //     </Router>
// //   );
// // }

// // export default App;


// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   useLocation,
// } from "react-router-dom";
// import { useEffect, useState } from "react";

// import Navbar from "./components/layout/Navbar";
// import Footer from "./components/layout/Footer";
// import Cursor from "./components/ui/Cursor";
// import ScrollToTop from "./components/ScrollToTop";
// import { Toaster } from "react-hot-toast";

// import AdminLayout from "./pages/admin/AdminLayout";
// import Dashboard from "./pages/admin/Dashboard";
// import Projects from "./pages/admin/Projects";
// import Clients from "./pages/admin/Clients";
// import ReviewAdmin from "./pages/admin/Reviews";

// import Home from "./pages/Home";
// import About from "./pages/About";
// import ProjectsPage from "./pages/ProjectsPage";
// import Login from "./pages/Login";
// import ContactPage from "./pages/ContactPage";

// import RouteGuard from "./routes/RouteGuard";
// import AdminPublicRoute from "./routes/AdminPublicRoute";
// import ProtectedRoute from "./routes/ProtectedRoute";

// import LogoStroke from "./components/ui/LogoStroke";
// const handleLogout = () => {
//   localStorage.removeItem("token");
//   window.location.href = "/admin/login";
// };
// // 🔥 LAYOUT WRAPPER
// // function LayoutWrapper() {
// //   const location = useLocation();
// //   const isAdmin = location.pathname.startsWith("/admin");

// //   return (
// //     <RouteGuard>
// //       <Cursor />
// //       <ScrollToTop />

// //       {/* ✅ PUBLIC NAVBAR ONLY */}
// //       {!isAdmin && <Navbar onLogoutClick={handleLogout} />}

// //       {/* <div className={isAdmin ? "" : "pt-20"}> */}
// //       <div className={!isAdmin ? "mt-6" : ""}>

// //         <Routes>

// //           {/* 🔐 ADMIN PANEL */}
// //           <Route
// //             path="/admin"
// //             element={
// //               <ProtectedRoute>
// //                 <AdminLayout />
// //               </ProtectedRoute>
// //             }
// //           >
// //             <Route index element={<Dashboard />} />
// //             <Route path="projects" element={<Projects />} />
// //             <Route path="clients" element={<Clients />} />
// //             <Route path="reviews" element={<ReviewAdmin />} />
// //           </Route>

// //           {/* 🔐 ADMIN LOGIN */}
// //           <Route
// //             path="/admin/login"
// //             element={
// //               <AdminPublicRoute>
// //                 <Login />
// //               </AdminPublicRoute>
// //             }
// //           />

// //           {/* 🌐 PUBLIC */}
// //           <Route path="/" element={<Home />} />
// //           <Route path="/about" element={<About />} />
// //           <Route path="/projects" element={<ProjectsPage />} />
// //           <Route path="/contact" element={<ContactPage />} />

// //         </Routes>
// //       </div>

// //       {/* ✅ FOOTER ONLY PUBLIC */}
// //       {!isAdmin && <Footer />}
// //     </RouteGuard>
// //   );
// // }
// function LayoutWrapper() {
//   const location = useLocation();
//   const isAdmin = location.pathname.startsWith("/admin");

//   return (
//     <RouteGuard>
//       <Cursor />
//       <ScrollToTop />

//       {/* ✅ NAVBAR */}
//       {!isAdmin && <Navbar onLogoutClick={handleLogout} />}

//       {/* ✅ CONTENT */}
//       <div>
//         <Routes>

//           <Route
//             path="/admin"
//             element={
//               <ProtectedRoute>
//                 <AdminLayout />
//               </ProtectedRoute>
//             }
//           >
//             <Route index element={<Dashboard />} />
//             <Route path="projects" element={<Projects />} />
//             <Route path="clients" element={<Clients />} />
//             <Route path="reviews" element={<ReviewAdmin />} />
//           </Route>

//           <Route
//             path="/admin/login"
//             element={
//               <AdminPublicRoute>
//                 <Login />
//               </AdminPublicRoute>
//             }
//           />

//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/projects" element={<ProjectsPage />} />
//           <Route path="/contact" element={<ContactPage />} />

//         </Routes>
//       </div>

//       {!isAdmin && <Footer />}
//     </RouteGuard>
//   );
// }

// // 🔥 MAIN APP
// function App() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 2000);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <Router>
//       {loading ? (
//         <LogoStroke />
//       ) : (
//         <>
//           <LayoutWrapper />
//           <Toaster />
//         </>
//       )}
//     </Router>
//   );
// }

// export default App;


import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect, useState } from "react";

import Cursor from "./components/ui/Cursor";
import ScrollToTop from "./components/ScrollToTop";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ReviewFloatingButton from "./components/ui/ReviewFloatingButton";

import AdminLayout from "./pages/admin/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import Projects from "./pages/admin/Projects";
import Clients from "./pages/admin/Clients";
import ReviewAdmin from "./pages/admin/Reviews";

import Home from "./pages/Home";
import About from "./pages/About";
import ProjectsPage from "./pages/ProjectsPage";
import Login from "./pages/Login";
import ContactPage from "./pages/ContactPage";

import RouteGuard from "./routes/RouteGuard";
import AdminPublicRoute from "./routes/AdminPublicRoute";
import ProtectedRoute from "./routes/ProtectedRoute";

import LogoStroke from "./components/ui/LogoStroke";

// 🔥 LOGOUT
const handleLogout = () => {
  localStorage.removeItem("token");
  window.location.href = "/admin/login";
};



// 🔥 ✅ PUBLIC LAYOUT FUNCTION (APP KE ANDAR HI)
function MainLayout({ children }) {
  return (
    <div className="relative">

      {/* 🔥 NAVBAR */}
      <Navbar />

      {/* 🔥 MAIN */}
      <main
        className="
          pt-20
          min-h-screen
          px-4 sm:px-6 md:px-10   /* ❌ no max-width */
        "
      >
        {children}
      </main>

      {/* 🔥 FLOAT BUTTON */}
      <ReviewFloatingButton />

      {/* 🔥 FOOTER */}
      <Footer />
    </div>
  );
}

// 🔥 ROUTES WRAPPER
function LayoutWrapper() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");

  return (
    <RouteGuard>
      <Cursor />
      <ScrollToTop />

      <Routes>

        {/* 🔐 ADMIN */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout onLogoutClick={handleLogout} />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="projects" element={<Projects />} />
          <Route path="clients" element={<Clients />} />
          <Route path="reviews" element={<ReviewAdmin />} />
        </Route>

        {/* 🔐 LOGIN */}
        <Route
          path="/admin/login"
          element={
            <AdminPublicRoute>
              <Login />
            </AdminPublicRoute>
          }
        />

        {/* 🌐 PUBLIC (MAIN LAYOUT APPLY) */}
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />

        <Route
          path="/about"
          element={
            <MainLayout>
              <About />
            </MainLayout>
          }
        />

        <Route
          path="/projects"
          element={
            <MainLayout>
              <ProjectsPage />
            </MainLayout>
          }
        />

        <Route
          path="/contact"
          element={
            <MainLayout>
              <ContactPage />
            </MainLayout>
          }
        />

      </Routes>
    </RouteGuard>
  );
}



// 🔥 MAIN APP
export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {loading ? (
        <LogoStroke />
      ) : (
        <>
          <LayoutWrapper />
          <Toaster position="top-right" />
        </>
      )}
    </Router>
  );
}