"use client"
import React,{useState} from 'react'
import logo from '@/public/logo.png'
import Image from 'next/image'
import { CgMenuRightAlt } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
const Navbar:React.FC = () => {
  const [open , setOpen ] = useState<boolean>(false);
  const handleMenuClick: () => void = () => {
    setOpen(!open); 
  };
  return (
    <nav className="px-9 flex justify-between items-center w-full h-20 bg-transparent fixed top-0 shadow-xl">
      <div className="flex items-center gap-2 text-xl font-bold">
        <Image src={logo} alt="logo" height={40} width={40} />
        Its Bold
      </div>
      <div className="sm:hidden" onClick={handleMenuClick}>
        {open ? (
          <IoMdClose className="text-2xl" />
        ) : (
          <CgMenuRightAlt className="text-2xl" />
        )}
      </div>
      <div
        className={
          open
            ? "absolute top-0 left-0 h-screen w-[300px] flex justify-center items-center bg-gray-200 backdrop-blur-sm rounded-lg"
            : "absolute top-0 left-[-100%] h-screen w-[300px] flex justify-center items-center bg-gray-200 backdrop-blur-sm rounded-lg"
        }
      >
        <ul className="flex flex-col gap-[30px]">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Home</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar