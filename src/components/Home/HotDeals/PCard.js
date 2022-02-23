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
      className="transform hover:scale-105 transition duration-400 flex flex-col px-2 shadow-md w-48 my-2 border border-gray-200 pb-3 cursor-pointer bg-white rounded-sm"
    >
      <div className="relative">
        <img src={image} alt="" className="w-full h-32" />
        <span className="absolute top-0 bg-red-500 p-0.5 px-2 m-1 ml-0 rounded-md text-white text-xs">
          {discount}% OFF
        </span>
      </div>

      <div className="mt-1">
        <p className="text-sm pr-4 capitalize">
          {description.substring(0, 50)}...
        </p>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold">{price} AED</p>

        <p className="text-sm text-gray-600 font-semibold line-through">
          {oldPrice} AED
        </p>
        <BsFillCartFill className="text-lg text-orange-600" />
      </div>
      <div className="my-2 mt-3">
        <span className="text-white bg-green-500 p-0.5 px-2 rounded-md text-sm">
          Free delivery
        </span>
      </div>
    </div>
  );
}

export default PCard;
