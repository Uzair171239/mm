import React from "react";
import { BsFillCartFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function ProductCard({ product, country }) {
  const { price, offer_percentage, image, title, old_price } = product;
  const { currency, view_vat } = country;
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate("/cart", { state: { product } });
      }}
      className="w-full h-64 md:h-96 bg-white hover:scale-105 transition duration-400 shadow-sm hover:shadow-2xl border border-gray-200 rounded-sm px-3  cursor-pointer my-2"
    >
      <div className="relative">
        {/* <span className="absolute bg-red-600 px-2 rounded-md m-1 md:m-2 -ml-3 z-10 text-white text-xs md:text-sm">
          {offer_percentage}% OFF
        </span> */}
        <img
          src={`http://localhost:3001${image}`}
          alt="product"
          className="w-full h-32 md:h-60  "
        />
      </div>
      <div className="flex flex-col py-2">
        <span className="text-white bg-green-500 text-xs pb-0.5 md:text-base px-1 md:px-3 rounded-md w-fit">
          Free delivery
        </span>
        <p className="text-gray-900 hover:text-red-500 text-sm md:text-base">
          {title.substring(0, 45)}...
        </p>
        <div className="flex justify-between items-center">
          <h4 className="font-bold text-sm md:text-base">
            {price + " " + currency}
          </h4>
          <p className="text-sm text-gray-600 font-semibold line-through">
            {old_price + " " + currency}
          </p>
          <BsFillCartFill className="text-lg text-orange-600 animate-bounce" />
        </div>
        <p className="text-gray-900 text-sm md:text-base">
          {view_vat + " " + currency} - VAT included
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
