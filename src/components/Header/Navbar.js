import React from "react";

function Navbar({ filter, data }) {
  return (
    <div
      className="flex px-0 md:px-5 py-4 space-x-5 items-center  whitespace-nowrap
     overflow-x-scroll  custom_scrollbar_hide "
    >
      <button
        onClick={(e) => filter(e.target.name)}
        className="hover:text-red-600 md:hover:scale-150 transition duration-300 ease-in-out "
        name="Home"
      >
        Home
      </button>
      {data.map((name, index) => {
        return (
          <button
            onClick={(e) => filter(e.target.name)}
            className="hover:text-red-600 md:hover:scale-150 transition duration-300 ease-in-out "
            name={name}
            key={index} 
          >
            {name}
          </button>
        );
      })}
    </div>
  );
}

export default Navbar;
