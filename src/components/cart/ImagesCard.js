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
    <div className="flex flex-col ">
      <div className="flex-1 border border-gray-300  shadow-sm  bg-white relative">
        <div className="flex justify-between items-center absolute w-full">
          <span className="text-white bg-green-500 px-3 w-fit text-sm">
            Free delivery
          </span>
          {/* <span className="bg-red-600 px-3 text-white text-sm w-fit">
            {discount}% OFF
          </span> */}
        </div>
        <div className="flex-1">
          <img
            src={`http://localhost:3001${prev}`}
            alt=""
            className="w-full h-full object-cover "
          />
        </div>

        <div className="flex items-center space-x-1 mt-2 absolute bottom-0">
          <div className="border-2 border-green-400 w-16 md:w-28 cursor-pointer">
            <img
              src={`http://localhost:3001${product.image}`}
              alt=""
              className="w-full h-16 md:h-24 bg-contain"
              onClick={() => setPrev(product.image)}
            />
          </div>
          {images.map((image) => (
            <div
              className="border-2 border-green-400 w-16 md:w-28 cursor-pointer"
              key={image.id}
            >
              <img
                src={`http://localhost:3001${image.image}`}
                alt=""
                className="w-full h-16 md:h-24 bg-contain"
                onClick={() => setPrev(image.image)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImagesCard;
