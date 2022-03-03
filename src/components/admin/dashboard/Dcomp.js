import React from "react";
import axios from "axios";
import { BsFillHandIndexThumbFill } from "react-icons/bs";
import { MdCategory } from "react-icons/md";

function DComp() {
  const [dashboard, setDashboard] = React.useState({});
  React.useEffect(() => {
     axios.get("http://localhost:3001/dashboard").then(({data})=> setDashboard(data))
  }, [])
  return (
    <div>
      <div className="flex p-20 pb-2 px-28 space-x-5">
        {/* today order */}
        <div className="flex justify-between items-center w-1/2 border border-gray-200 bg-white rounded-md shadow-lg p-10">
          <div className="">
            <p className="font-semibold text-lg">TODAY'S ORDERS</p>
            <p className="font-semibold text-lg">0</p>
          </div>
          <div>
            <div className="flex justify-center items-center w-14 h-14 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              <BsFillHandIndexThumbFill className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
        {/* total order */}
        <div className="flex justify-between items-center w-1/2 border border-gray-200 bg-white rounded-md shadow-lg p-10">
          <div className="">
            <p className="font-semibold text-lg">TOTAL ORDERS</p>
            <p className="font-semibold text-lg">{dashboard.total_orders}</p>
          </div>
          <div>
            <div className="flex justify-center items-center w-14 h-14 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              <MdCategory className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex p-20 pt-4 px-28 space-x-5">
        {/* today order */}
        <div className="flex justify-between items-center w-1/2 border border-gray-200 bg-white rounded-md shadow-lg p-10">
          <div className="">
            <p className="font-semibold text-lg">Missing Orders</p>
            <p className="font-semibold text-lg">{dashboard.missing_orders}</p>
          </div>
          <div>
            <div className="flex justify-center items-center w-14 h-14 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              <BsFillHandIndexThumbFill className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
        {/* total order */}
        <div className="flex justify-between items-center w-1/2 border border-gray-200 bg-white rounded-md shadow-lg p-10">
          <div className="">
            <p className="font-semibold text-lg">TOTAL Products</p>
            <p className="font-semibold text-lg">{dashboard.total_products}</p>
          </div>
          <div>
            <div className="flex justify-center items-center w-14 h-14 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              <MdCategory className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DComp;
