import React from "react";
import { BsFillCartFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const { name, price, discount, image, description, oldPrice } = product;
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate("/cart", { state: { product } });
      }}
      className="w-full bg-white shadow-sm hover:shadow-xl border border-gray-200 rounded-sm px-3 pb-4 cursor-pointer"
    >
      <div className="relative">
        <span className="absolute bg-red-600 px-2 rounded-md m-1 md:m-2 -ml-3 z-10 text-white text-xs md:text-sm">
          {discount}% OFF
        </span>
        <img
          src={image}
          alt="product"
          className="w-full h-32 md:h-60 transform hover:scale-110 transition-all duration-400 ease-in-out  "
        />
      </div>
      <div className="flex flex-col py-2">
        <span className="text-white bg-green-500 text-xs pb-0.5 md:text-base px-1 md:px-3 rounded-md w-fit">
          Free delivery
        </span>
        <p className="text-gray-500">{name}</p>
        <p className="text-gray-900 hover:text-red-500 text-sm md:text-base">
          {description.substring(0, 45)}...
        </p>
        <div className="flex justify-between items-center">
          <h4 className="font-bold text-sm md:text-base">{price} AED</h4>
          <p className="text-sm text-gray-600 font-semibold line-through">
            {oldPrice} AED
          </p>
          <BsFillCartFill className="text-lg text-orange-600 animate-bounce" />
        </div>
        <p className="text-gray-900 text-sm md:text-base">
          52 AED - VAT included
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
