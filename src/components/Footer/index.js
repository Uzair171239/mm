import React from "react";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { RiFacebookCircleLine } from "react-icons/ri";

function Footer() {
  return (
    <div className="w-full bg-gray-900 text-white px-5 md:px-12 lg:px-28 py-10 ">
      <div className="flex justify-between items-baseline">
        {/* contact us **************/}
        <div className="space-y-3">
          <h1 className="md:text-2xl md:font-bold">Contact Us</h1>
          <p className="text-sm md:text-lg">
            Shams Free Zone, Sharjah Media City, Jetronics LLC
          </p>
          <div className="flex items-center space-x-2 group cursor-pointer w-fit">
            <RiFacebookCircleLine className="w-7 h-7 -ml-1 text-red-500 group-hover:scale-105 group-hover:text-gray-400" />
            <p className="group-hover:scale-105 group-hover:text-red-500">
              Ashop-Oman
            </p>
          </div>
          <div className="flex items-center space-x-2 group cursor-pointer w-fit">
            <FiMail className="w-6 h-6  text-red-500 group-hover:scale-105 group-hover:text-gray-400" />
            <p className="group-hover:scale-105 group-hover:text-red-500">
              Ashop@Oman.com
            </p>
          </div>
          <div className="flex items-center space-x-2 group cursor-pointer w-fit">
            <BsInstagram className="w-6 h-6  text-red-500 group-hover:scale-105 group-hover:text-gray-400" />
            <p className="group-hover:scale-105 group-hover:text-red-500">
              Ashop-Oman
            </p>
          </div>
          <div className="flex items-center space-x-2 group cursor-pointer w-fit">
            <AiOutlineWhatsApp className="w-6 h-6  text-red-500 group-hover:scale-105 group-hover:text-gray-400" />
            <p className="group-hover:scale-105 group-hover:text-red-500">
              +971 4 456 789
            </p>
          </div>
        </div>
        {/* social media **************/}
        <div className=" space-y-3">
          <h1 className="md:text-2xl md:font-bold">
            Follow Us On Social Media
          </h1>

          <div className="flex items-center md:space-x-4">
            <div className="flex flex-col group items-center cursor-pointer w-10 sm:w-14 hover:text-white">
              <RiFacebookCircleLine className="mb-1 w-9 h-9 text-red-500 group-hover:animate-bounce" />
              <p className="opacity-0 group-hover:opacity-100 tracking-widest">
                Facebook
              </p>
            </div>
            <div className="flex flex-col group items-center cursor-pointer w-10 sm:w-14 hover:text-white">
              <FiMail className="mb-1 w-8 h-8 text-red-500 group-hover:animate-bounce" />
              <p className="opacity-0 group-hover:opacity-100 tracking-widest">
                Email
              </p>
            </div>
            <div className="flex flex-col group items-center cursor-pointer w-10 sm:w-14 hover:text-white">
              <BsInstagram className="mb-1 w-7 h-7 text-red-500 group-hover:animate-bounce" />
              <p className="opacity-0 group-hover:opacity-100 tracking-widest">
                Instagram
              </p>
            </div>
            <div className="flex flex-col group items-center cursor-pointer w-10 sm:w-14 hover:text-white">
              <AiOutlineWhatsApp className="mb-1 w-8 h-8 text-red-500 group-hover:animate-bounce" />
              <p className="opacity-0 group-hover:opacity-100 tracking-widest">
                WhatsApp
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-1 bg-red-500 w-full rounded-md my-3" />
      {/* term and conditions ********** */}
      <div className="flex justify-cemter items-center flex-col">
        <p className="text-center">
          Privacy Policy - Terms of Use - User Information Legal Enquiry Guide
        </p>
        <p>© {new Date().getFullYear()} Ashop-oman.com, All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
