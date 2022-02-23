import React from "react";

function Navbar({filter}) {
  return (
    <div
      className="flex px-0 md:px-5 py-4 justify-between items-center  whitespace-nowrap
     overflow-x-scroll  custom_scrollbar_hide space-x-4 lg:space-x-0"
    >
      <button
        onClick={e => filter(e.target.name)}
        className="hover:text-red-600 md:hover:scale-150 transition duration-300 ease-in-out "
        name="Home"
      >
        Home
      </button>
      <button
        onClick={e => filter(e.target.name)}
        className="hover:text-red-600 md:hover:scale-150 transition duration-300 ease-in-out"
        name="*Hot Deals*"
      >
        Hot Deals
      </button>
      <button
        onClick={e => filter(e.target.name)}
        className="hover:text-red-600 md:hover:scale-150 transition duration-300 ease-in-out"
        name="Women"
      >
        Women
      </button>
      <button
        onClick={e => filter(e.target.name)}
        className="hover:text-red-600 md:hover:scale-150 transition duration-300 ease-in-out"
        name="Men"
      >
        Men
      </button>
      <button
        onClick={e => filter(e.target.name)}
        className="hover:text-red-600 md:hover:scale-150 transition duration-300 ease-in-out"
        name="Kids"
      >
        Kids
      </button>
      <button
        onClick={e => filter(e.target.name)}
        className="hover:text-red-600 md:hover:scale-150 transition duration-300 ease-in-out"
        name="Kitchenware"
      >
        Kitchenware
      </button>
      <button
        onClick={e => filter(e.target.name)}
        name="Electronics"
        className="hover:text-red-600 md:hover:scale-150 transition duration-300 ease-in-out"
      >
        Electronics
      </button>
      <button
        onClick={e => filter(e.target.name)}
        className="hover:text-red-600 md:hover:scale-150 transition duration-300 ease-in-out"
        name="Health & Fitness"
      >
        Health & Fitness
      </button>
      <button
        onClick={e => filter(e.target.name)}
        className="hover:text-red-600 md:hover:scale-150 transition duration-300 ease-in-out"
        name="Homeware"
      >
        Homeware
      </button>
      <button
        onClick={e => filter(e.target.name)}
        className="hover:text-red-600 md:hover:scale-150 transition duration-300 ease-in-out"
        name="Gadgets"
      >
        Gadgets
      </button>
    </div>
  );
}

export default Navbar;
