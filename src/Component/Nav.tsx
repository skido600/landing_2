"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
const Nav: React.FC = () => {
  const navItems = ["Home", "About Us", "Features", "Purchase", "Contact Us"];
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [toggle, setToggle] = useState<boolean>(false);
  const handle = () => {
    setToggle(!toggle);
  };
  const handleClick = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <>
      <main>
        <nav className="flex justify-between md:justify-start  bg-[#2F1F14] items-center px-7">
          <div>
            <Image
              src="svg/Borcelle__2_-removebg-preview 1.svg"
              alt="hero_image"
              width={100}
              height={200}
            />
          </div>
          <div
            className={`md:bg-[#6F4436] bg-[#2F1F14]  top-0 right-0 bottom-0 md:top-0 space-y-5 ${
              toggle ? "translate-x-0" : "translate-x-full"
            } md:space-y-0 left-0  md:relative absolute md:translate-x-0 px-6 py-2 md:rounded-lg transition-transform duration-300 transform `}
          >
            <div className="md:hidden" onClick={handle}>
              <IoMdClose
                size={30}
                className="float-right text-[#6F4436] mb-11"
              />
            </div>
            <ul className="md:flex gap-x-8 space-y-8 md:space-y-0 transition-transform duration-300 transform  md:mt-0 mt-20  items-center md:text-[13px] text-[40px] text-white font-inter">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleClick(index)}
                  className={` cursor-pointer ${
                    activeIndex === index
                      ? " bg-white text-[#2F1F14]  px-6 md:mt-0 py-2 rounded-lg transition-all duration-300 "
                      : ""
                  } `}
                >
                  {item}

                  {activeIndex === index && (
                    <span className="ml-2 sm:hidden text-[#6F4436] text-[50px]">
                      -
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:hidden " onClick={handle}>
            <IoIosMenu size={40} className="text-[#6F4436]" />
          </div>
        </nav>
      </main>
    </>
  );
};

export default Nav;
