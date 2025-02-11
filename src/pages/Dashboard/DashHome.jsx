import DashboardLayout from "../../components/Dashboard/DashboardLayout";

export default function DashHome() {
  return (
    <DashboardLayout>
      <div className="  my-4 md:mt-0 px-2 flex flex-col gap-6 ">
        {/* Header Section */}
        <div className="bg-gray-100 p-6 rounded-xl shadow border border-gray-300 ">
          <h1 className="text-2xl font-semibold">Hey Alishba,</h1>
          <p className="text-lg text-gray-600">What do you want to create?</p>
          <div className="mt-4 bg-white border border-gray-300 rounded-lg flex items-center gap-2">
            <input
              type=" text "
              placeholder=" Specify a writing task "
              className=" w-full p-2 pr-0 rounded-lg outline-none "
            />
            <button className="bg-purple-600 text-white mr-1 px-3 py-1 rounded-lg">Create</button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className=" flex flex-col lg:flex-row flex-wrap justify-center gap-6 ">
          <div className=" bg-gray-100 hover:cursor-pointer w-full lg:w-1/4 p-4 rounded-lg shadow-md text-center flex items-center justify-center border shrink-0 border-gray-300 ">Create a document</div>
          <div className=" bg-gray-100 hover:cursor-pointer w-full lg:w-1/4 p-4 rounded-lg shadow-md text-center flex items-center justify-center border shrink-0 border-gray-300 ">Start a conversation</div>
          <div className=" bg-gray-100 hover:cursor-pointer w-full lg:w-1/4 p-4 rounded-lg shadow-md text-center flex items-center justify-center border shrink-0 border-gray-300 ">Discover Apps</div>
        </div>

        {/* Recent Documents & Conversations */}
        <div className=" grid lg:grid-cols-2 gap-6">
          <div className="bg-transparent border border-gray-300 p-4 md:p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Recent documents</h2>
            <ul>
              <li className=" py-2 hover:cursor-pointer flex flex-col xs:flex-row items-start xs:items-center xs:justify-between border-b border-gray-300 xs:gap-2 ">
                <p>Oud Fragrance Essentials</p>
                <p className=" text-[12px] text-gray-700 " >6 hours ago</p>
              </li>
              <li className=" py-2 hover:cursor-pointer flex flex-col xs:flex-row items-start xs:items-center xs:justify-between border-b border-gray-300 xs:gap-2 ">
                <p>Plumbing Warning Signs</p>
                <p className=" text-[12px] text-gray-700 " >3 days ago</p>
              </li>
              <li className=" py-2 hover:cursor-pointer flex flex-col xs:flex-row items-start xs:items-center xs:justify-between border-b border-gray-300 xs:gap-2 ">
                <p>Plumbing Service Signs</p>
                <p className=" text-[12px] text-gray-700 " >3 days ago</p>
              </li>
              <li className=" py-2 hover:cursor-pointer flex flex-col xs:flex-row items-start xs:items-center xs:justify-between xs:gap-2 ">
                <p>Electrosurgical Units</p>
                <p className=" text-[12px] text-gray-700 " >4 days ago</p>
              </li>
            </ul>
          </div>
          <div className="bg-transparent border border-gray-300 p-4 md:p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Recent conversations</h2>
            <ul>
              <li className=" py-2 hover:cursor-pointer flex flex-col xs:flex-row items-start xs:items-center xs:justify-between border-b border-gray-300 xs:gap-2 ">
                <p>words</p>
                <p className=" text-[12px] text-gray-700 " >3 days ago</p>
              </li>
              <li className=" py-2 hover:cursor-pointer flex flex-col xs:flex-row items-start xs:items-center xs:justify-between border-b border-gray-300 xs:gap-2 ">
                <p>ns Blog Outline</p>
                <p className=" text-[12px] text-gray-700 " >4 days ago</p>
              </li>
              <li className=" py-2 hover:cursor-pointer flex flex-col xs:flex-row items-start xs:items-center xs:justify-between border-b border-gray-300 xs:gap-2 ">
                <p>Suggestions</p>
                <p className=" text-[12px] text-gray-700 " >5 days ago</p>
              </li>
              <li className=" py-2 hover:cursor-pointer flex flex-col xs:flex-row items-start xs:items-center xs:justify-between xs:gap-2 ">
                <p>Cockroach Facts SEO Title</p>
                <p className=" text-[12px] text-gray-700 " >5 days ago</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
