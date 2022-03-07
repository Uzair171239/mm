import React from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { MdOutlineChangeCircle } from "react-icons/md";
import { useNavigate } from "react-router";

function Profile({ setShowProfile }) {
  const Navigate = useNavigate();
  return (
    <div className=" mt-2 px-5 py-10 bg-white  rounded-bl-md">
      <div className="flex flex-col justify-center items-start  h-full space-y-5">
        <button
          onClick={() => {
            setShowProfile(false);
            Navigate("/change-password");
          }}
          className="w-full flex justify-center items-center space-x-2 border p-1 rounded-md px-2"
        >
          <span className="text-lg font-semibold">Change Password</span>
          <MdOutlineChangeCircle className="text-2xl text-gray-500" />
        </button>
        <button
          className="w-full flex justify-center items-center space-x-2 border p-1 rounded-md px-2"
          onClick={(e) => {
            localStorage.removeItem("admin_user");
            Navigate("/admin");
          }}
        >
          <span className="text-lg font-semibold">Logout</span>
          <AiOutlineLogout className="text-2xl text-gray-500" />
        </button>
      </div>
    </div>
  );
}

export default Profile;
