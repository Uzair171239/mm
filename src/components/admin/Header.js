import React from "react";

import { MdSpaceDashboard } from "react-icons/md";
import { RiShoppingBasket2Fill } from "react-icons/ri";
import { RiShoppingBag2Fill } from "react-icons/ri";
import { BsImage } from "react-icons/bs";
import { MdContactMail } from "react-icons/md";
import { AiFillSetting } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { MdCategory } from "react-icons/md";

function Header() {
  return (
    <div className="w-full py-4 bg-white shadow-md flex justify-between items-center px-2">
      <div className="flex items-center space-x-1">
        <MdSpaceDashboard className="text-gray-800 text-xl" />
        <p>/</p>
        <p>Admin</p>
        <p>/</p>
        <p>Dashboard</p>
      </div>
      <div>
        <div className="flex items-center space-x-1 pr-3">
          <div className=" w-10 h-10 rounded-full border border-red-600">
            <img
              src="https://thumbs.dreamstime.com/z/flat-male-avatar-image-beard-hairstyle-businessman-profile-icon-vector-179285629.jpg"
              alt=""
              className="w-full h-full rounded-full"
            />
          </div>
          <p className="font-mono ">Super Admin</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
