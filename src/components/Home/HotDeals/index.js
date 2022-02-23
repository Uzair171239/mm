import React from "react";
import PCard from "./PCard";
import { data } from "../../data";

function HotDeals() {
  return (
    <div className="px-3 w-full">
      <h1 className="text-3xl font-bold font-sance ">Hot Deals</h1>
      <div className="flex items-center space-x-5 w-fit ">
        {data.map((product) => (
          <PCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default HotDeals;
