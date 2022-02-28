import React from "react";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";

function Header({filterByTitle, filterByCategory, data}) {
  const getData = data && data.map((item)=> item.cattegory_name);
  const unique = getData.filter((d, i) => getData.indexOf(d) === i);
  return (
    <div className="w-full bg-white px-3  shadow-md">
      {/* Header search bar */}
      <Searchbar filter={filterByTitle} />
      {/* menu bar  */}
      <Navbar filter={filterByCategory} data={unique} />
    </div>
  );
}

export default Header;
