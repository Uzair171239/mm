import React, { useState } from "react";

const images = [
  {
    id: 1,
    image: "/laptop.png",
  },
  {
    id: 2,
    image: "/pr2.png",
  },
  {
    id: 3,
    image: "/pr3.png",
  },
];

function ImagesCard({ product }) {
  const [prev, setPrev] = useState(product.image);
  const { discount } = product;
  return (
    <div className="flex flex-col">
      <div className="flex flex-col flex-1 pb-2 border border-gray-300  shadow-sm cursor-zoom-in bg-white ">
        <div className="flex-1">
          <img
            src={prev}
            alt=""
            className="w-full h-72 md:h-96 cursor-zoom-in"
          />
        </div>
        <div className="flex justify-between items-center">
          <span className="text-white bg-green-500  px-3 rounded-md w-fit">
            Free delivery
          </span>
          <span className=" bg-red-600 px-2 rounded-md  text-white text-sm">
            {discount}% OFF
          </span>
        </div>
      </div>
      <div className="flex   items-center space-x-1 mt-2 ">
        <div
          className="border-2 border-green-400 w-16 md:w-28 cursor-pointer"
          onClick={() => setPrev(product.image)}
        >
          <img
            src={product.image}
            alt=""
            className="w-full h-16 md:h-24 bg-contain"
          />
        </div>
        {images.map((image) => (
          <div
            className="border-2 border-green-400 w-16 md:w-28 cursor-pointer"
            key={image.id}
          >
            <img
              src={image.image}
              alt=""
              className="w-full h-16 md:h-24 bg-contain"
              onClick={() => setPrev(image.image)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImagesCard;
