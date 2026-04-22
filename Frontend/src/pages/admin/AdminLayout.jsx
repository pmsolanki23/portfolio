// import { useState } from "react";
// import { Outlet } from "react-router-dom";
// import Sidebar from "../../components/admin/Sidebar";
// import Navbar from "../../components/layout/Navbar";

// export default function AdminLayout() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <div className="h-screen flex">
//       {/* SIDEBAR */}
//       <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

//       {/* RIGHT SIDE */}
//       <div className="flex-1 flex flex-col">
//         <Navbar />

//         <div className="flex-1 overflow-y-auto p-6">
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// }



import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/admin/Sidebar";
import Navbar from "../../components/layout/Navbar";

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className=" h-screen bg-gray-50 dark:bg-[#020617]">
      
      {/* ✅ CENTERED NAVBAR */}
      <Navbar />

      <div className="flex mt-20">
        {/* SIDEBAR */}
        <Sidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        {/* CONTENT */}
        <div className="flex-1 md:ml-64 p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}