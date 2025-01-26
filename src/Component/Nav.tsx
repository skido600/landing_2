"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IoIosMenu, IoMdClose } from "react-icons/io";

const Nav: React.FC = () => {
  const navItems = ["Home", "About Us", "Features", "Purchase", "Contact Us"];
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle((prev) => !prev);
  const handleClick = (index: number) => setActiveIndex(index);

  return (
    <nav className="flex justify-between md:justify-start bg-[#2F1F14] items-center md:px-14 px-4">
      {/* Logo */}
      <div>
        <Image
          src="/svg/Borcelle__2_-removebg-preview 1.svg"
          alt="hero_image"
          width={110}
          height={110}
        />
      </div>

      {/* Menu */}
      <main
        className={`fixed   ${
          toggle ? "translate-x-0 " : "translate-x-full"
        }  md:translate-x-0  z-10 transition-transform duration-300 transform  top-0 right-0 bottom-0 md:relative bg-[#06141799] backdrop-blur-sm w-full`}
      >
        <div
          className={`md:bg-[#6F4436]   bg-[#2F1F14] top-0 right-0 bottom-0 md:relative fixed 
      px-6 py-2 md:rounded-lg 
        md:space-y-0 space-y-8  lg:ml-[8rem] `}
        >
          {/* Close Icon */}
          <div className="md:hidden" onClick={handleToggle}>
            <IoMdClose
              size={40}
              className="float-right text-[#6F4436] mb-11 cursor-pointer"
            />
          </div>

          {/* Navigation Links */}
          <ul className="md:flex gap-x-8 py-20  md:h-auto  h-screen space-y-7 md:space-y-0 md:py-0 items-center md:text-[13px] text-[30px] text-white font-inter">
            {navItems.map((item, index) => (
              <li
                key={index}
                onClick={() => handleClick(index)}
                className={`cursor-pointer ${
                  activeIndex === index
                    ? "bg-white text-[#2F1F14] px-4 md:px-4 md:py-1 rounded-lg transition-all duration-300"
                    : ""
                }`}
              >
                {item}
                {activeIndex === index && (
                  <span className="ml-2 sm:hidden text-[#6F4436] text-[30px]">
                    -
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </main>

      {/* Hamburger Icon */}
      <div className="md:hidden" onClick={handleToggle}>
        <IoIosMenu size={40} className="text-[#6F4436]" />
      </div>
    </nav>
  );
};

export default Nav;
