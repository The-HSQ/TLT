import { useState } from "react";
import { Search, PlusCircle } from "lucide-react";
import DashboardLayout from "../../components/Dashboard/DashboardLayout";

export default function Chat() {
    const [conversations, setConversations] = useState([
        { title: "Brand Voice Definition", time: "10 minutes ago" },
        { title: "Competitor LSI Keywords", time: "3 days ago" },
        { title: "Bathroom Renovations Blog Outline", time: "4 days ago" },
        { title: "Secondary Keyword Suggestions", time: "5 days ago" },
        { title: "Electrical Services Blog Outline", time: "6 days ago" },
    ]);

    return (
        <DashboardLayout>
            <div className="flex flex-col items-center p-6 w-full min-h-screen bg-gray-100">
                <div className="w-full max-w-2xl p-6 bg-white shadow-lg rounded-2xl">
                    <div className="flex flex-col items-center text-center">
                        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                            {/* Placeholder for an icon or logo */}
                        </div>
                        <h2 className="text-xl font-semibold mb-4">Hey Alishba, how can we help you today?</h2>
                        <div className="relative w-full">
                            <input
                                type="text"
                                placeholder="Ask Jasper anything..."
                                className="w-full border rounded-lg p-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <Search className="absolute right-3 top-3 text-gray-400" size={20} />
                        </div>
                        <div className="flex gap-2 mt-3">
                            <button className="border px-4 py-2 rounded-lg">Attach</button>
                            <button className="border px-4 py-2 rounded-lg">Choose Brand Voice</button>
                            <button className="text-gray-400 px-4 py-2" disabled>Enhance</button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full mt-6">
                            <button className="bg-gray-200 px-4 py-2 rounded-lg">Create an image of a sunset beach</button>
                            <button className="bg-gray-200 px-4 py-2 rounded-lg">Generate ideas for a new marketing campaign</button>
                            <button className="bg-gray-200 px-4 py-2 rounded-lg">Create a social media post</button>
                            <button className="bg-gray-200 px-4 py-2 rounded-lg">Help me plan an email campaign</button>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-2xl mt-6">
                    <h3 className="text-lg font-semibold mb-2">Recent conversations</h3>
                    <div className="p-4 bg-white shadow-md rounded-lg">
                        {conversations.map((conv, index) => (
                            <div key={index} className="flex justify-between py-2 border-b last:border-none">
                                <span>{conv.title}</span>
                                <span className="text-gray-500 text-sm">{conv.time}</span>
                            </div>
                        ))}
                        <button className="text-blue-500 mt-3">View All</button>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
