import React from "react";

function Navbar({ filter, data }) {
  return (
    <div
      className="flex px-0 md:px-5 py-4 justify-between items-center  whitespace-nowrap
     overflow-x-scroll  custom_scrollbar_hide space-x-4 lg:space-x-0"
    >
      <button
        onClick={(e) => filter(e.target.name)}
        className="hover:text-red-600 md:hover:scale-150 transition duration-300 ease-in-out "
        name="Home"
      >
        Home
      </button>
      {data.map((name) => {
        return (
          <button
            onClick={(e) => filter(e.target.name)}
            className="hover:text-red-600 md:hover:scale-150 transition duration-300 ease-in-out "
            name={name}
          >
            {name}
          </button>
        );
      })}
    </div>
  );
}

export default Navbar;
