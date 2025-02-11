import { Menu } from "lucide-react";
import { useLocation } from "react-router-dom";

export default function Navbar({ setSidebarOpen }) {
  const location = useLocation();

  let title;
  switch (location.pathname) {
    case "/dashboard":
      title = "Home";
      break;
    case "/content":
      title = "My content";
      break;
    case "/chat":
      title = "Chat";
      break;
    case "/knowledge-base":
      title = "Knowledge Base";
      break;
    case "/voice-over":
      title = "Voice Over";
      break;
    default:
      title = "";
  }

  return (
    <div className="flex relative items-center justify-center p-4 bg-gray-100 shadow-md md:hidden">
      <button className=" absolute top-4 left-4 " onClick={() => setSidebarOpen(true)}>
        <Menu className="w-7 h-7" />
      </button>
      <h1 className="text-lg text-center font-semibold">{title}</h1>
    </div>
  );
}
