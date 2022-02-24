import React from "react";
import { Link } from "react-router-dom";

import { MdSpaceDashboard } from "react-icons/md";
import { RiShoppingBasket2Fill } from "react-icons/ri";
import { RiShoppingBag2Fill } from "react-icons/ri";
import { BsImage } from "react-icons/bs";
import { MdContactMail } from "react-icons/md";
import { AiFillSetting } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { MdCategory } from "react-icons/md";

function Sidebar() {
  return (
    <div className="flex flex-col">
      <img
        src="/company_logo.png"
        alt="logo"
        className="w-28 h-28 bg-contain  mx-auto "
      />

      <div className="flex flex-1 flex-col space-y-2 px-2">
        <Link
          to={"/admin-dashboard"}
          className="flex items-center pl-8 space-x-3 w-full bg-slate-100 py-2 hover:bg-slate-200"
        >
          <MdSpaceDashboard className="text-gray-800 text-xl" />{" "}
          <span className="text-lg font-semibold text-gray-800">Dashboard</span>
        </Link>
        <Link
          to={"/admin-orders"}
          className="flex items-center pl-8 space-x-3 w-full bg-slate-100 py-2 hover:bg-slate-200"
        >
          <RiShoppingBag2Fill className="text-gray-800 text-xl" />{" "}
          <span className="text-lg font-semibold text-gray-800">Order</span>
        </Link>
        <Link
          to={"/admin-missingorder"}
          className="flex items-center pl-8 space-x-3 w-full bg-slate-100 py-2 hover:bg-slate-200"
        >
          <RiShoppingBasket2Fill className="text-gray-800 text-xl" />{" "}
          <span className="text-lg font-semibold text-gray-800">
            Missing Order
          </span>
        </Link>
        <Link
          to={"/admin-product"}
          className="flex items-center pl-8 space-x-3 w-full bg-slate-100 py-2 hover:bg-slate-200"
        >
          <BsImage className="text-gray-800 text-xl" />{" "}
          <span className="text-lg font-semibold text-gray-800">Products</span>
        </Link>
        <Link
          to={"/admin-contactus"}
          className="flex items-center pl-8 space-x-3 w-full bg-slate-100 py-2 hover:bg-slate-200"
        >
          <MdContactMail className="text-gray-800 text-xl" />{" "}
          <span className="text-lg font-semibold text-gray-800">
            Contact us
          </span>
        </Link>
        <Link
          to={"/admin-countries"}
          className="flex items-center pl-8 space-x-3 w-full bg-slate-100 py-2 hover:bg-slate-200"
        >
          <MdCategory className="text-gray-800 text-xl" />{" "}
          <span className="text-lg font-semibold text-gray-800">Countries</span>
        </Link>
        <Link
          to={"/admin-status"}
          className="flex items-center pl-8 space-x-3 w-full bg-slate-100 py-2 hover:bg-slate-200"
        >
          <HiLocationMarker className="text-gray-800 text-xl" />{" "}
          <span className="text-lg font-semibold text-gray-800">Status</span>
        </Link>
        <Link
          to={"/admin-settings"}
          className="flex items-center pl-8 space-x-3 w-full bg-slate-100 py-2 hover:bg-slate-200"
        >
          <AiFillSetting className="text-gray-800 text-xl" />{" "}
          <span className="text-lg font-semibold text-gray-800">Settings</span>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
