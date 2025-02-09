import { useLocation, Link } from 'react-router-dom';
import { FileText, Plus, Folder, Bot, BookOpenText, AudioLines } from "lucide-react";

const SidebarHeader = () => {
    const location = useLocation();

    const navItems = [
        { to: "/dashhome", icon: FileText, label: "Home" },
        { to: "/content", icon: Folder, label: "My Content" },
        { to: "/chat", icon: Bot, label: "Chat" },
        { to: "/knowledge", icon: BookOpenText, label: "Knowledge Base" },
        { to: "/voice", icon: AudioLines, label: "Voice Over" },
    ];

    return (
        <header className=" flex flex-col w-full md:w-64 h-[100dvh] bg-white text-black p-5">
            <div className=" flex flex-col ">
                <h1 className="text-xl font-bold mb-6">Timeless Tails</h1>
                <button className="flex items-center gap-2 w-full bg-purple-600 text-white py-2 px-4 rounded-lg">
                    <Plus /> Create Content
                </button>
                <nav className=" mt-6 flex flex-col gap-0.5 ">
                    {navItems.map(({ to, icon: Icon, label }) => (
                        <Link
                            key={to}
                            to={to}
                            className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-300 ${location.pathname === to
                                    ? " text-blue-600 bg-gray-200 font-bold text-base "
                                    : " text-gray-700 text-base font-semibold hover:bg-gray-200 hover:text-purple-600 "
                                }`}
                        >
                            <Icon size={20} strokeWidth={2.4} />
                            {label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default SidebarHeader;
