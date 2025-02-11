// import { useState } from "react";
// import Sidebar from "./Sidebar";
// import Navbar from "./Navbar";

// export default function DashboardLayout({ children }) {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

//       {/* Overlay for Mobile */}
//       {sidebarOpen && (
//         <div
//           className="fixed inset-0 bg-opacity-50 md:hidden"
//           onClick={() => setSidebarOpen(false)}
//         ></div>
//       )}

//       {/* Main Content */}
//       <div className="flex-1 p-0 md:p-6 md:ml-64 transition-all">
//         <Navbar setSidebarOpen={setSidebarOpen} />
//         {children}
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <div 
        className={`fixed inset-y-0 left-0 z-50 ${sidebarOpen ? "block" : "hidden"} md:block`}
        onClick={(e) => e.stopPropagation()} // Prevents clicks from closing the sidebar
      >
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      </div>

      {/* Overlay for Mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 md:hidden z-40"
          onClick={() => setSidebarOpen(false)} // Closes only when clicking outside
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 p-0 md:p-6 md:ml-64 transition-all">
        <Navbar setSidebarOpen={setSidebarOpen} />
        {children}
      </div>
    </div>
  );
}
