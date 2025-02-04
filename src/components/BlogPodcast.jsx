import { ArrowRight, Box } from 'lucide-react';
import React from 'react'


const cards = [
    {
        title: "Connect with Community",
        description:
            "Self-paced guides, courses, events, and resources, plus channels to connect with fellow marketers.",
        linkText: "Explore the Community",
        image: "/blog/blog_1.jpeg",
    },
    {
        title: "Watch Timeless Tails (TLT) Foundations",
        description:
            "The foundational knowledge and skills to leverage Timeless Tails (TLT) for any type of marketing project.",
        linkText: "Start watching",
        image: "/blog/blog_2.jpeg",
    },
    {
        title: "Search Knowledge Center",
        description:
            "Learn how to use generative AI for your specific marketing role and use case.",
        linkText: "Search Knowledge Center",
        image: "/blog/blog_3.jpeg",
    },
    {
        title: "Customer Stories",
        description:
            "How businesses like yours are leveraging Timeless Tails (TLT) to drive growth and success.",
        linkText: "Explore Customer Stories",
        image: "/blog/blog_4.png",
    },
    {
        title: "Get Support",
        description:
            "Get in touch about your account, partnerships, press, careers, and more.",
        linkText: "Get in touch",
        image: "/blog/blog_5.jpeg",
    },
    {
        title: "The Timeless Tails (TLT) Blog",
        description:
            "Stories, insights, and best practices for AI-powered marketing.",
        linkText: "Explore the Blog",
        image: "/blog/blog_6.jpeg",
    },
];

const BlogPodcast = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="container">
                <div className=" w-fit flex justify-center items-center gap-2 px-4 py-1 border-b mx-auto">
                    <Box strokeWidth={1.5} size={19} />
                    <h1>Blog / Podcast</h1>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2 py-6 md:p-6">

                    {cards.map((card, index) => (
                        <div key={index} className=" hover:cursor-pointer group p-4 md:p-6 bg-white text-black rounded-2xl shadow-md transition-all transform hover:scale-101 hover:shadow-lg">
                            <img src={card.image} alt={card.title} className=" border mb-4 w-full h-40 object-cover rounded-lg" />
                            <h2 className="text-xl font-semibold">{card.title}</h2>
                            <p className="text-gray-700 mt-2 text-ellipsis line-clamp-2 ">{card.description}</p>
                            <div className=" mt-4 flex justify-start items-center gap-2 group-hover:underline ">
                                <button href="#" className=" font-medium ">
                                    {card.linkText}
                                </button>
                                <ArrowRight strokeWidth={2} size={18} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BlogPodcast
