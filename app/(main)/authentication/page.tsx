"use client";
import React from "react";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
const page = () => {
  return (
    <div className="h-[60vh] p-5 sm:p-0 flex flex-col justify-center items-center gap-7">
      <div className="absolute circlePosition w-screen sm:w-[590px] h-[400px] bg-gradient-to-r from-indigo-500 rounded-[100%] top-[50%] left-[50%]  blur-[90px] translate-x-[-50%] translate-y-[-50%] z-[-1]" />
      <h1 className="text-3xl sm:text-3xl text-center  text-gray-600 leading-[51px]  sm:leading-1">
        Fly into{" "}
        <span className="text-indigo-700 font-extrabold">The CodeBird</span>'s
        CTF: Where Challenges Take Wings!🪽
      </h1>
      <button
        onClick={() => signIn("google")}
        className="flex items-center gap-[10px] bg-white  border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800  hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
      >
        <FcGoogle className="text-xl" />
        <span>Continue with Google</span>
      </button>
    </div>
  );
};

export default page;