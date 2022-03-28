import React from "react";
import { Slide } from "react-slideshow-image";

const slideImages = [
  {
    url: "https://mdbcdn.b-cdn.net/img/new/slides/043.webp",
    caption: "Slide 1",
  },
  {
    url: "https://mdbcdn.b-cdn.net/img/new/slides/041.webp",
    caption: "Slide 2",
  },
  {
    url: "https://mdbcdn.b-cdn.net/img/new/slides/042.webp",
    caption: "Slide 3",
  },
];

const Banner = () => {
  return (
    <div className="w-full my-7 mb-5 px-3 ">
      <Slide>
        <div className="h-44 md:h-96 shadow-2xl">
          <div
            style={{
              backgroundImage: `url(http://localhost:3001/api/images/slider/banner_image1.jpg)`,
            }}
            className="h-full shadow-2xl bg-no-repeat bg-cover "
          ></div>
        </div>
        <div className="h-44 md:h-96 shadow-2xl">
          <div
            style={{
              backgroundImage: `url(http://localhost:3001/api/images/slider/banner_image2.jpg)`,
            }}
            className="h-full shadow-2xl bg-no-repeat bg-cover "
          ></div>
        </div>
      </Slide>
    </div>
  );
};

export default Banner;
