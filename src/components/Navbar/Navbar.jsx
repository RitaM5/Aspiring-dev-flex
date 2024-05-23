import React, {useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className=" z-50 w-full bg-base-100 font-poppins">
      <nav className="bg-base-100">
        <div className="flex font-poppins items-center font-medium justify-around h-20 ">
          <div className="z-50 w-full flex justify-between">
            <h1 className=" relative right-20 md:right-0 text-[#298541] w-52 block text-3xl">Flex</h1>
            <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
              <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
            </div>
          </div>
          <ul className="md:flex hidden w-full text-base relative right-6  items-center gap-8 lg:gap-2 font-semibold ">
            <li className="">
              <Link to="" className="py-2 px-3 inline-block hover:border-b-4 hover:border-black">
                Products
              </Link>
            </li>
            <li>
              <Link to="" className="py-2 px-3 inline-block hover:border-b-4 hover:border-black">
                Features
              </Link>
            </li>
            <li>
              <Link to="" className="py-2 px-3 inline-block hover:border-b-4 hover:border-black">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="" className="py-2 px-3 inline-block hover:border-b-4 hover:border-black">
               Resources
              </Link>
            </li>
          </ul>
          <div className="md:block hidden">
            <ul className="md:flex relative left-8 items-center hidden text-base gap-8 lg:gap-2 font-semibold ">
              <li>
                <Link to="" className="py-2 px-3 inline-block">
                  <button className="border px-3 py-1 duration-300 hover:bg-[#298541] hover:text-white">Login</button>
                </Link>
              </li>
              <li className="relative right-4">
                <Link to="" className="py-2 px-3 inline-block">
                  <button className="border px-3 py-1 bg-[#298541] text-white">Signup</button>
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile nav */}
          <ul
            className={`
        md:hidden bg-[#102f25] text-white fixed w-full h-[400px] z-10 py-12 top-24 overflow-y-auto bottom-0  pl-4
        duration-500 ${open ? "left-0" : "left-[-100%] font-semibold text-lg "}
        `}>
            <li>
              <Link to="" className="py-4 px-3 inline-block">
               Products
              </Link>
            </li>
            <li>
              <Link to="" className="py-3 px-3 inline-block">
                Features
              </Link>
            </li>
            <li>
              <Link to="" className="py-3 px-3 inline-block">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="" className="py-3 px-3 inline-block">
                Resources
              </Link>
            </li>
            <div className="py-3">
              <li>
                <Link to="" className="py-3 px-3 inline-block">
                <button className="border px-3 py-1 duration-300 hover:bg-[#298541] hover:text-white">Login</button>
                </Link>
              </li>
              <li>
                <Link to="" className="py-3 px-3 inline-block">
                <button className="border px-3 py-1 bg-[#298541] text-white">Signup</button>
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </nav>
    </div>

  );
};

export default Navbar;