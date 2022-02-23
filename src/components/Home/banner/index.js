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
        {slideImages.map((slideImage, index) => (
          <div className="h-44 md:h-96 shadow-2xl " key={index}>
            <div
              style={{ backgroundImage: `url(${slideImage.url})` }}
              className="h-full shadow-2xl bg-no-repeat bg-cover "
            ></div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Banner;