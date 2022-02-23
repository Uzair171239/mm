import React from "react";
import { data } from "../../data";
import ProductCard from "./ProductCard";

function AllProduct() {
  return (
    <>
      <h1 className="mx-3 text-3xl font-bold font-sans my-4">
        Recommended items
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 px-3 my-2 gap-3">
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default AllProduct;
