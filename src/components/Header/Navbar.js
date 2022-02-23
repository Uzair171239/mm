import React from "react";

function Navbar() {
  return (
    <div
      className="flex px-5 py-4 justify-between items-center  whitespace-nowrap
     overflow-x-scroll  custom_scrollbar_hide space-x-4 lg:space-x-0"
    >
      <a
        href="#"
        className="hover:text-red-600 md:hover:scale-150 transition duration-300 ease-in-out "
      >
        Home
      </a>
      <a
        href="#"
        className="hover:text-red-600 md:hover:scale-150 transition duration-300 ease-in-out"
      >
        Hot Deals
      </a>
      <a
        href="#"
        className="hover:text-red-600 md:hover:scale-150 transition duration-300 ease-in-out"
      >
        Women
      </a>
      <a
        href="#"
        className="hover:text-red-600 md:hover:scale-150 transition duration-300 ease-in-out"
      >
        Men
      </a>
      <a
        href="#"
        className="hover:text-red-600 md:hover:scale-150 transition duration-300 ease-in-out"
      >
        Kids
      </a>
      <a
        href="#"
        className="hover:text-red-600 md:hover:scale-150 transition duration-300 ease-in-out"
      >
        Kitchenware
      </a>
      <a
        href="#"
        className="hover:text-red-600 md:hover:scale-150 transition duration-300 ease-in-out"
      >
        Electronics
      </a>
      <a
        href="#"
        className="hover:text-red-600 md:hover:scale-150 transition duration-300 ease-in-out"
      >
        Health & Fitness
      </a>
      <a
        href="#"
        className="hover:text-red-600 md:hover:scale-150 transition duration-300 ease-in-out"
      >
        Homeware
      </a>
      <a
        href="#"
        className="hover:text-red-600 md:hover:scale-150 transition duration-300 ease-in-out"
      >
        Gadgets
      </a>
    </div>
  );
}

export default Navbar;
