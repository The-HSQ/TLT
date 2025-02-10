// import { Box } from 'lucide-react';
// import React from 'react';
// import { Link } from 'react-router-dom';
// import knowledgeData from './api/knowledge.json';

// const Card = ({ slug, image, icon, title, description }) => {
//     return (
//         <Link to={`/knowledge/${slug}`} className="bg-kCardBg transition-all transform hover:scale-101 hover:cursor-pointer text-black flex flex-col gap-4 p-5 rounded-2xl shadow-lg border border-kBorderClr">
// const Card = ({ slug, image, icon, title, description }) => {
//             <div className=" border border-kBorderClr rounded flex justify-center items-center">
//                 <img className='rounded w-full h-56 object-cover' src={image} alt={title} />
//             </div>
//             <div className="flex items-start gap-3">
//                 <img className="w-6 h-10" src={icon} alt="icon" />
//                 <div className="flex flex-col gap-1">
//                     <h3 className="text-lg font-semibold">{title}</h3>
//                     <p className="text-kTxtClr text-ellipsis line-clamp-3">{description}</p>
//                 </div>
//             </div>
//         </Link>
//     );
// };

// const KnowledgeBase = () => {
//     return (
//         <div className=" flex mt-10 flex-col justify-center items-center ">
//             <div className="flex justify-center items-center gap-2 px-4 py-1 border-b mb-4 mx-auto">
//                 <Box strokeWidth={1.5} size={19} />
//                 <h1>Knowledge Base</h1>
//             </div>

//             <div className=" container flex flex-col justify-center items-center lg:gap-5 ">
//                 {/* top heading and top cards */}
//                 <div className="grid grid-cols-1 md:grid-cols lg:grid-cols gap-0 justify-center items-center bg-transparent p-3 xs:px-10 xs:pb-0">
//                     <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-3">
//                         Timeless Tails (TLT) AI Assists Enterprises, Government Entities, And Emerging Startups With
//                     </h1>
//                     <div className=" hidden md:grid lg:grid-cols-3 h-[370px] gap-5 w-full">
//                         {/* Knowledge Base */}
//                         <Link to={`/knowledge/${slug}`} className=" hover:cursor-pointer transition-all transform hover:scale-101 border border-kBorderClr text-black flex gap-2 p-6 rounded-2xl shadow-lg md:col-span-2">
//                             <div className=" w-[100%] lg:w-[60%] flex flex-col justify-center">
//                                 <div className="flex items-start gap-3">
//                                     <img className="w-6 h-10 " src="./knowledge/svg/star.svg" alt="icon" />
//                                     <div className="flex flex-col gap-1">
//                                         <h3 className="text-lg font-semibold">Knowledge Base</h3>
//                                         <p className="text-kTxtClr">
//                                             Utilize Timeless Tails Gen AI-powered knowledge base and cloud storage to access business intelligence anytime with natural language queries.
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className=" w-[40%] border border-kBorderClr rounded flex justify-center items-center">
//                                 <img className=' h-full w-full object-center ' src="./knowledge/image/knowledge_1.jpeg" alt="" />
//                             </div>
//                         </Link>

//                         {/* On-Prem Deployment */}
//                         <div className=" hidden lg:block md:col-span-1">
//                             <Card
//                                 slug="on-prem-deployment"
//                                 image="./knowledge/image/knowledge_3.png"
//                                 icon="./knowledge/svg/brain.svg"
//                                 title="On-Prem Deployment"
//                                 description="Keep your data safe and sound with Timeless Tails (TLT) on-prem deployment, stay in control and meet all your privacy requirements."
//                             />
//                         </div>
//                     </div>
//                 </div>

//                 {/* bottom cards */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center bg-transparent p-3 xs:px-10 xs:py-5 ">
//                     <div className=" lg:hidden md:col-span-1">
//                         <Card
//                             image="./knowledge/image/knowledge_3.png"
//                             icon="./knowledge/svg/brain.svg"
//                             title="On-Prem Deployment"
//                             description="Keep your data safe and sound with Timeless Tails (TLT) on-prem deployment, stay in control and meet all your privacy requirements."
//                         />
//                     </div>

//                     {knowledgeData.map((data, index) => (
//                         <Card
//                             key={index}
//                             slug={data.slug}
//                             image={data.image}
//                             icon={data.icon}
//                             title={data.title}
//                             description={data.description}
//                         />
//                     ))}
//                 </div>
//             </div>


//             {/* <div className=" md:hidden h-[460px] xs:h-[400px] sb:h-[370px] p-3 w-full mb-5 "> */}
//             <div className=" md:hidden h-auto sb:h-[370px] p-3 w-full mb-5 ">
//                 {/* Knowledge Base */}
//                 <Link to='/knowledge/:slug' className=" border border-kBorderClr bg-kCardBg h-full text-white flex flex-col items-center sb:flex-row gap-3 sb:gap-6 p-6 rounded-2xl shadow-lg ">
//                     <div className=" w-full sb:w-[60%] flex flex-col justify-center">
//                         <div className="flex items-start gap-3">
//                             <img className="w-6 h-10" src="./knowledge/svg/star.svg" alt="icon" />
//                             <div className="flex flex-col gap-1">
//                                 <h3 className="text-lg text-black font-semibold">Knowledge Base</h3>
//                                 <p className="text-kTxtClr">
//                                     Utilize Timeless Tails Gen AI-powered knowledge base and cloud storage to access business intelligence anytime with natural language queries.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>

//                     <div className=" border border-kBorderClr rounded flex justify-center items-center">
//                         <img className=' h-56 w-full object-center ' src="./knowledge/image/knowledge_1.jpeg" alt="" />
//                     </div>
//                 </Link>
//             </div>
//         </div>
//     );
// };

// export default KnowledgeBase;


import { Box } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import knowledgeData from './api/knowledge.json';

const KnowledgeBase = () => {
    return (
        <div className=" flex mt-10 flex-col justify-center items-center ">
            <div className="flex justify-center items-center gap-2 px-4 py-1 border-b mb-4 mx-auto">
                <Box strokeWidth={1.5} size={19} />
                <h1>Knowledge Base</h1>
            </div>
            <div className=" container flex flex-col justify-center items-center lg:gap-5 ">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center bg-transparent p-3 xs:px-10 xs:py-5 ">
                    {knowledgeData.map((data, index) => (
                        <Link key={index} to={`/knowledge/${data.slug}`} className="bg-kCardBg transition-all transform hover:scale-101 hover:cursor-pointer text-black flex flex-col gap-4 p-5 rounded-2xl shadow-lg border border-kBorderClr">
                            <div className=" border border-kBorderClr rounded flex justify-center items-center">
                                <img className='rounded w-full h-56 object-cover' src={data.image} alt={data.title} />
                            </div>
                            <div className="flex items-start gap-3">
                                <img className="w-6 h-10" src={data.icon} alt="icon" />
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-lg font-semibold">{data.title}</h3>
                                    <p className="text-kTxtClr text-ellipsis line-clamp-3">{data.description}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default KnowledgeBase
