import DashboardLayout from "../../components/Dashboard/DashboardLayout";
import { useState } from "react";
import { MoreVertical, Search } from "lucide-react";

const contentData = [
  { name: "Oud Fragrance Essentials", campaign: "-", lastModified: "7 hours ago", status: "DRAFT" },
  { name: "Plumbing Warning Signs", campaign: "-", lastModified: "3 days ago", status: "DRAFT" },
  { name: "Plumbing Service Signs", campaign: "-", lastModified: "3 days ago", status: "DRAFT" },
  { name: "Electrosurgical Units", campaign: "-", lastModified: "4 days ago", status: "DRAFT" },
  { name: "Dubai Bathroom Renovations", campaign: "-", lastModified: "4 days ago", status: "PUBLISHED" },
  { name: "Cockroach Facts", campaign: "-", lastModified: "4 days ago", status: "DRAFT" },
  { name: "Bathroom Renovation Tips", campaign: "-", lastModified: "4 days ago", status: "PUBLISHED" },
  { name: "AC Installation Sharjah", campaign: "-", lastModified: "5 days ago", status: "DRAFT" },
  { name: "Licensed Electricians", campaign: "-", lastModified: "5 days ago", status: "DRAFT" },
  { name: "Licensed Electrical Experts", campaign: "-", lastModified: "5 days ago", status: "DRAFT" },
  { name: "Medical Equipment Guide", campaign: "-", lastModified: "6 days ago", status: "DRAFT" },
];

export default function Content() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState([]);
  const [selectAll, setSelectAll] = useState(false);


  // for handling checkBox
  const handleSelectAll = () => {
    if (selectAll) {
      setSelected([]);
    } else {
      setSelected(contentData.map((_, index) => index));
    }
    setSelectAll(!selectAll);
  };

  const handleSelect = (index) => {
    if (selected.includes(index)) {
      setSelected(selected.filter(i => i !== index));
    } else {
      setSelected([...selected, index]);
    }
  };

  // For search
  const filteredContent = contentData.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <DashboardLayout>
      {/* Header */}
      <div className=" px-4 pt-4 md:pt-0 pb-4 ">
        <h2 className=" text-2xl font-bold ">My content</h2>
        <p className=" text-sm text-gray-500 " >Any content you have created will appear here.</p>
      </div>

      {/* Line */}
      <div className=" w-full h-[1px] bg-gray-300 "></div>

      {/* Main Section */}
      <div className="p-6 w-full ">
        {/* Search and button */}
        <div className="flex justify-between items-center mb-4">
          <div className=" flex justify-center items-center text-gray-700 border border-gray-300 px-2 rounded-md w-full max-w-md gap-1 " >
            <Search />
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className=" w-full outline-none rounded-md px-1 py-2"
            />
          </div>
          <button className=" hover:cursor-pointer ml-2 bg-blue-600 text-white px-4 py-2 rounded-md">+ Create content</button>
        </div>

        {/* table */}
        <div className="overflow-x-auto border border-gray-300 rounded-lg shadow-sm">
          <table className="w-full min-w-max bg-white">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="p-3 text-left">
                  <input type="checkbox" checked={selectAll} onChange={handleSelectAll} />
                </th>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Campaign</th>
                <th className="p-3 text-left">Last Modified</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-center"></th>
              </tr>
            </thead>
            <tbody>
              {filteredContent.map((item, index) => (
                <tr key={index} className=" first:border-t last:border-b-0 border-b border-gray-300 hover:bg-gray-50">
                  <td className="p-3">
                    <input type="checkbox" checked={selected.includes(index)} onChange={() => handleSelect(index)} />
                  </td>
                  <td className="p-3">{item.name}</td>
                  <td className="p-3">{item.campaign}</td>
                  <td className="p-3">{item.lastModified}</td>
                  <td className="p-3">
                    {item.status === 'PUBLISHED' ?
                      <span className=" flex w-fit justify-center items-center gap-1 bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm">
                        <div className=" w-2 h-2 bg-green-600 rounded-full "></div>
                        {item.status}
                      </span>
                      :
                      <span className=" flex w-fit justify-center items-center gap-1 bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm">
                        <div className=" w-2 h-2 bg-gray-600 rounded-full "></div>
                        {item.status}
                      </span>
                    }
                  </td>
                  <td className="p-3 text-center ">
                    <MoreVertical className=" bg-gray-200 border border-gray-300 p-1 rounded cursor-pointer" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </DashboardLayout>
  );
}
