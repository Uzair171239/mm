import React from "react";
import { GrFormSearch } from "react-icons/gr";

function Searchbar({ filter }) {
  const [value, setValue] = React.useState("");
  return (
    <div className="md:flex justify-between items-center border-b border-gray-200 ">
      <div>
        <img src="/AshoplogoBlackhandle.png" alt="logo" className="w-22 h-20" />
      </div>
      <div className="flex items-center group hover:shadow-md shadow-red-600 flex-1 border-2 border-red-600 rounded-md px-3 md:mx-2 md:ml-8 py-2 my-2 md:my-0">
        <GrFormSearch className="w-6 h-6" color="gray" />
        <input
          type="text"
          className="flex-1 pl-2 placeholder:text-gray-300 placeholder:font-sance outline-none"
          placeholder="Search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div>
        <button
          onClick={(e) => filter(value)}
          className="inline-block px-6 py-3 bg-red-500 text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Searchbar;
