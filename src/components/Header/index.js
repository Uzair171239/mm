import React from "react";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";

function Header({filterByTitle, filterByCategory}) {
  return (
    <div className="w-full bg-white px-3 pt-4 shadow-md">
      {/* Header search bar */}
      <Searchbar filter={filterByTitle} />
      {/* menu bar  */}
      <Navbar filter={filterByCategory} />
    </div>
  );
}

export default Header;
