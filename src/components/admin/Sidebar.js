import React from "react";
import { Link, useLocation } from "react-router-dom";

import { MdSpaceDashboard } from "react-icons/md";
import { RiShoppingBasket2Fill } from "react-icons/ri";
import { RiShoppingBag2Fill } from "react-icons/ri";
import { BsImage } from "react-icons/bs";
import { MdContactMail } from "react-icons/md";
import { AiFillSetting } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { MdCategory } from "react-icons/md";
import { BiWorld } from "react-icons/bi";

function Sidebar() {
  const title = useLocation();

  return (
    <div className="flex flex-col">
      <img
        src="/AshoplogoBlackhandle.png"
        alt="logo"
        className="w-28 h-28 bg-contain  mx-auto "
      />

      <div className="flex flex-1 flex-col space-y-2 px-2">
        <Link
          to={"/admin-dashboard"}
          className={`flex items-center pl-3 lg:pl-8 space-x-3 w-full  py-2 ${
            title.pathname === "/admin-dashboard"
              ? "bg-slate-500 text-white"
              : "bg-slate-200 text-gray-800"
          }`}
        >
          <MdSpaceDashboard className=" text-xl" />
          <span className="text-lg font-semibold ">Dashboard</span>
        </Link>
        <Link
          to={"/admin-orders"}
          className={`flex items-center pl-3 lg:pl-8 space-x-3 w-full  py-2 ${
            title.pathname === "/admin-orders"
              ? "bg-slate-500 text-white"
              : "bg-slate-200 text-gray-800"
          }`}
        >
          <RiShoppingBag2Fill className=" text-xl" />
          <span className="text-lg font-semibold ">Order</span>
        </Link>
        <Link
          to={"/admin-missingorder"}
          className={`flex items-center pl-3 lg:pl-8 space-x-3 w-full  py-2 ${
            title.pathname === "/admin-missingorder"
              ? "bg-slate-500 text-white"
              : "bg-slate-200 text-gray-800"
          }`}
        >
          <RiShoppingBasket2Fill className=" text-xl" />{" "}
          <span className="text-lg font-semibold ">Missing Order</span>
        </Link>
        <Link
          to={"/admin-categories"}
          className={`flex items-center pl-3 lg:pl-8 space-x-3 w-full  py-2 ${
            title.pathname === "/admin-categories"
              ? "bg-slate-500 text-white"
              : "bg-slate-200 text-gray-800"
          }`}
        >
          <MdCategory className=" text-xl" />
          <span className="text-lg font-semibold ">Categories</span>
        </Link>
        <Link
          to={"/admin-product"}
          className={`flex items-center pl-3 lg:pl-8 space-x-3 w-full  py-2 ${
            title.pathname === "/admin-product"
              ? "bg-slate-500 text-white"
              : "bg-slate-200 text-gray-800"
          }`}
        >
          <BsImage className="text-xl" />
          <span className="text-lg font-semibold ">Products</span>
        </Link>
        <Link
          to={"/admin-contactus"}
          className={`flex items-center pl-3 lg:pl-8 space-x-3 w-full  py-2 ${
            title.pathname === "/admin-contactus"
              ? "bg-slate-500 text-white"
              : "bg-slate-200 text-gray-800"
          }`}
        >
          <MdContactMail className=" text-xl" />{" "}
          <span className="text-lg font-semibold ">Contact us</span>
        </Link>
        <Link
          to={"/admin-countries"}
          className={`flex items-center pl-3 lg:pl-8 space-x-3 w-full  py-2 ${
            title.pathname === "/admin-countries"
              ? "bg-slate-500 text-white"
              : "bg-slate-200 text-gray-800"
          }`}
        >
          <BiWorld className=" text-xl" />{" "}
          <span className="text-lg font-semibold ">Countries</span>
        </Link>
        <Link
          to={"/admin-status"}
          className={`flex items-center pl-3 lg:pl-8 space-x-3 w-full  py-2 ${
            title.pathname === "/admin-status"
              ? "bg-slate-500 text-white"
              : "bg-slate-200 text-gray-800"
          }`}
        >
          <HiLocationMarker className=" text-xl" />{" "}
          <span className="text-lg font-semibold ">Status</span>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
