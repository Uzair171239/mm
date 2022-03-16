import React from "react";
import WhatsAppWidget from "react-whatsapp-widget";
// import "react-whatsapp-widget/dist/index.css";
import axios from "axios";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { RiFacebookCircleLine } from "react-icons/ri";
import "../../index.css";

// const data = [
//   {
//     id: 1,
//     country_name: "United Arab Emirates",
//     address: "A-Shop uae Muscat, Sultanate Of uae",
//     facebook: "facebook.com/ashop02",
//     instagram: "AShop",
//     email: "info@ashop-uae.com",
//     whatsapp: "+971 56 567 567",
//   },
//   {
//     id: 2,
//     country_name: "Oman",
//     address: "A-Shop Oman Muscat, Sultanate Of Oman",
//     facebook: "facebook.com/ashop02",
//     instagram: "AShop",
//     email: "info@ashop-oman.com",
//     whatsapp: "+971 56 567 333",
//   },
//   {
//     id: 3,
//     country_name: "Qatar",
//     address: "A-Shop qatar Muscat, Sultanate Of qatar",
//     facebook: "facebook.com/ashop02",
//     instagram: "AShop",
//     email: "info@ashop-qatar.com",
//     whatsapp: "+971 56 567 567",
//   },
// ];

function Footer() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("http://localhost:3001/contacts")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => alert(err.message));
  }, []);

  return (
    <div className="w-full bg-gray-900 text-white px-5 md:px-12 lg:px-28 py-10 pt-5 ">
      <WhatsAppWidget
        phoneNumber="923333713843"
        companyName="Ashop"
        textReplyTime="Typically replies within a minute"
      />
      <h1 className="text-xl md:text-2xl md:font-bold text-center mb-3">
        Contact Us
      </h1>
      <hr className=" w-60 mx-auto mb-5" />
      <div className="grid grid-cols-2 md:flex justify-between items-baseline">
        {/* contact us **************/}
        {data.map((data, index) => (
          <div className="space-y-3" key={index}>
            <p className="text-sm md:text-lg mt-2 lg:mt-0">
              {data.country_name}
            </p>
            <a
              href={data.facebook}
              className="flex items-center space-x-2 group cursor-pointer w-fit"
            >
              <RiFacebookCircleLine className="w-7 h-7 -ml-1 text-red-500 group-hover:scale-105 group-hover:text-gray-400" />
              <p className="text-sm md:text-base group-hover:scale-105 group-hover:text-red-500">
                Facebook
              </p>
            </a>
            <a
              href={data.instagram}
              className="flex items-center space-x-2 group cursor-pointer w-fit"
            >
              <FiMail className="w-6 h-6  text-red-500 group-hover:scale-105 group-hover:text-gray-400" />
              <p className="text-sm md:text-base group-hover:scale-105 group-hover:text-red-500">
                {data.email}
              </p>
            </a>
            <a
              href={data.instagram}
              className="flex items-center space-x-2 group cursor-pointer w-fit"
            >
              <BsInstagram className="w-6 h-6  text-red-500 group-hover:scale-105 group-hover:text-gray-400" />
              <p className="text-sm md:text-base group-hover:scale-105 group-hover:text-red-500">
                Instagram
              </p>
            </a>
            <a
              href={data.whatsapp}
              className="flex items-center space-x-2 group cursor-pointer w-fit"
            >
              <AiOutlineWhatsApp className="w-6 h-6  text-red-500 group-hover:scale-105 group-hover:text-gray-400" />
              <p className="text-sm md:text-base group-hover:scale-105 group-hover:text-red-500">
                {data.whatsapp}
              </p>
            </a>
          </div>
        ))}
        {/* social media **************/}
        {/* <div className=" space-y-3">
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
        </div> */}
      </div>
      <div className="h-1 bg-red-500 w-full rounded-md my-3" />
      {/* term and conditions ********** */}
      <div className="flex justify-cemter items-center flex-col">
        <p className="text-center">
          Privacy Policy - Terms of Use - User Information Legal Enquiry Guide
        </p>
        <p>© {new Date().getFullYear()} Ashop.com, All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
