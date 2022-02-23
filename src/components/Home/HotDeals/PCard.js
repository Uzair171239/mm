import React from "react";
import { BsFillCartFill } from "react-icons/bs";
import { useNavigate } from "react-router";

function PCard({ product }) {
  const { name, price, discount, image, description, oldPrice } = product;
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate("/cart", { state: { product } });
      }}
      className="transform hover:scale-105 transition duration-400 flex flex-col px-2 shadow-md w-40 md:w-48 my-2 border border-gray-200 pb-3 cursor-pointer bg-white rounded-sm"
    >
      <div className="relative">
        <img src={image} alt="" className="w-full h-24 md:h-32 " />
        <span className="absolute top-0 bg-red-500 px-0.5 md:p-0.5 md:px-2 md:m-1 -ml-2 md:ml-0 rounded-sm md:rounded-md text-white text-xs">
          {discount}% OFF
        </span>
      </div>

      <div className="mt-1">
        <p className="text-xs md:text-sm md:pr-4 capitalize">
          {description.substring(0, 45)}...
        </p>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold">{price} AED</p>

        <p className="text-sm text-gray-600 font-semibold line-through">
          {oldPrice} AED
        </p>
        <BsFillCartFill className="text-lg text-orange-600" />
      </div>
      <div className="my-1 md:my-2 md:mt-3">
        <span className="text-white bg-green-500 px-1 md:p-0.5 pb-0.5 md:px-2 rounded-sm md:rounded-md text-xs md:text-sm">
          Free delivery
        </span>
      </div>
    </div>
  );
}

export default PCard;
