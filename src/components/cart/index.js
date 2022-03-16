import React from "react";
import Footer from "../Footer";
import { useLocation } from "react-router-dom";
import ImagesCard from "./ImagesCard";
import Form from "./Form";

function AddToCart() {
  const { state } = useLocation();
  const { product } = state;
  return (
    <div>
      {/*<Breedcrumb location={product.id} />*/}
      {/* back button */}

      <div className="grid md:grid-cols-2 gap-3 py-10 px-2 pt-14">
        {/* images ************ */}
        <ImagesCard product={product} />
        {/* order form */}
        <Form product={product} />
      </div>
      {/* Description ********** */}
      <div className="w-full bg-slate-200 py-6 px-4">
        <h1 className="text-2xl font-semibold my-1">Description</h1>
        <p className="">{product.description}</p>
      </div>
      {/* Footer ******************** */}
      {/* <Footer /> */}
    </div>
  );
}

// const Breedcrumb = ({ location }) => {
//   return (
//     <div className="w-full py-3 px-3 bg-gray-800 shadow-md ">
//       <p className="text-white bg-gray-800">Home / cart / {location}</p>
//     </div>
//   );
// };

export default AddToCart;
