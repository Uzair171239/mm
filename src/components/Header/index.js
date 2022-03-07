import React from "react";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";

function Header() {
  return (
    <div className="w-full bg-white px-3  shadow-md">
      {/* Header search bar */}
      <Searchbar />
      {/* menu bar  */}
      <Navbar />
    </div>
  );
}

export default Header;
