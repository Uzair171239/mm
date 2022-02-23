import React, { useEffect, useState } from "react";
import axios from "axios";

// const images = [
//   {
//     id: 1,
//     image: "/laptop.png",
//   },
//   {
//     id: 2,
//     image: "/pr2.png",
//   },
//   {
//     id: 3,
//     image: "/pr3.png",
//   },
// ];

function ImagesCard({ product }) {
  const [prev, setPrev] = useState(product.image);
  const [images, setImages] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3001/product_images/${product.id}`)
      .then(({ data }) => {
        setImages(data);
      });
  }, []);
  const { discount } = product;
  return (
    <div className="flex flex-col">
      <div className="flex flex-col flex-1 pb-2 border border-gray-300  shadow-sm cursor-zoom-in bg-white ">
        <div className="flex-1">
          <img
            src={`http://localhost:3001${prev}`}
            alt=""
            className="w-full h-96 cursor-zoom-in"
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
        <div className="border-2 border-green-400 w-28 cursor-pointer">
          <img
            src={`http://localhost:3001${product.image}`}
            alt=""
            className="w-full h-24 bg-contain"
            onClick={() => setPrev(product.image)}
          />
        </div>
        {images.map((image) => (
          <div
            className="border-2 border-green-400 w-28 cursor-pointer"
            key={image.id}
          >
            <img
              src={`http://localhost:3001${image.image}`}
              alt=""
              className="w-full h-24 bg-contain"
              onClick={() => setPrev(image.image)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImagesCard;
