import React from "react";
import PCard from "./PCard";

function HotDeals({data, country}) {
  
  return (
    <div className="px-3 w-fit ">
      <h1 className="text-3xl font-bold font-sance my-2">Hot Deals</h1>
      <div className="animate-marquee hover:animate-paused flex items-center space-x-2 overflow-x-hidden animation-play-state" >  
        {data.map((product) => (
          <PCard key={product.id} product={product} country={country}/>
          ))}
          
        </div>
        
    </div>
  );
}

export default HotDeals;
