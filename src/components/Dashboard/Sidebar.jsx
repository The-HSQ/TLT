import { Link, useLocation } from "react-router-dom";

export default function Sidebar({ sidebarOpen, setSidebarOpen, user }) {
  // Function to get the first letter of the user's name
  const getFirstLetter = (name) => {
    return name ? name.charAt(0).toUpperCase() : "A";
  };

  const location = useLocation();

  return (
    <div
      className={`fixed top-0 left-0 h-screen border-r border-gray-300 w-64 bg-gray-100 shadow-lg transition-transform ${
        sidebarOpen ? "translate-x-0" : "-translate-x-64"
      } md:translate-x-0`}
    >
      {/* Close Button for Mobile */}
      <button
        className="absolute top-4 right-4 md:hidden"
        onClick={() => setSidebarOpen(false)}
      >
        ✖
      </button>

      {/* Sidebar Navigation */}
      <nav className="p-4 flex flex-col gap-4 ">
        <Link to='/dashboard' className="text-2xl font-bold">Timeless Tails (TLT)</Link>
        <ul className=" flex flex-col gap-1 " >
          <Link to="/dashboard" className={` p-2 rounded-lg hover:bg-gray-200 cursor-pointer ${location.pathname === '/dashboard' ? 'bg-gray-200 font-bold text-[#6724C9]' : ''} `}>
            Home
          </Link>
          <Link to="/content" className={` p-2 rounded-lg hover:bg-gray-200 cursor-pointer ${location.pathname === '/content' ? 'bg-gray-200 font-bold text-[#6724C9]' : ''} `}>
            My content
          </Link>
          <Link to="/chat" className={` p-2 rounded-lg hover:bg-gray-200 cursor-pointer ${location.pathname === '/chat' ? 'bg-gray-200 font-bold text-[#6724C9]' : ''} `}>
            Chat
          </Link>
          <Link to="/knowledge-base" className={` p-2 rounded-lg hover:bg-gray-200 cursor-pointer ${location.pathname === '/knowledge-base' ? 'bg-gray-200 font-bold text-[#6724C9]' : ''} `}>
            Knowledge Base
          </Link>
          <Link to="/voice-over" className={` p-2 rounded-lg hover:bg-gray-200 cursor-pointer ${location.pathname === '/voice-over' ? 'bg-gray-200 font-bold text-[#6724C9]' : ''} `}>
            Voice Over
          </Link>
        </ul>
      </nav>

      {/* User Info */}
      <div className="absolute hover:bg-gray-200 hover:cursor-pointer bottom-0 left-0 right-0 p-4 flex items-center space-x-3 border-t border-gray-300">
        {user?.image ? (
          <img
            src={user.image}
            alt="User Avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
        ) : (
          <div className="w-10 h-10 flex items-center justify-center bg-gray-400 text-white rounded-full">
            {getFirstLetter(user?.name || "")}
          </div>
        )}
        <span className="text-base font-medium">{user?.name || "Alishba"}</span>
      </div>
    </div>
  );
}
