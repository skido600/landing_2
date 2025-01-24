import React from "react";
import Image from "next/image";
const Discover: React.FC = () => {
  return (
    <>
      <main className="bg-[#DBBCA1] px-2 pt-2 pb-6">
        <section className="flex flex-col-reverse md:flex-row justify-between mx-4 gap-x-6 lg:gap-x-0 items-center">
          <div>
            <Image
              src="/svg/coffee IMAGE.svg"
              alt="coffe_image"
              width={400}
              height={400}
              className="mt-4 md:mt-0"
            />
          </div>
          <div className="md:w-[60%]">
            <h1 className="text-[#220404] font-bold  text-[20px] lg:text-[30px] font-Poppins">
              Discover Coffee Borcelle
            </h1>
            <p className="text-[#1B0B0BD9] text-[15px] md:text-[20px] mb-4 font-Poppins">
              Elevating Your Coffee Experience
            </p>
            <div className="text-[#000000]">
              <p className="font-inter md:text-[15px] text-[13px]">
                At Coffee Borcelle, we&apos;re on a mission to redefine your
                coffee moments. Our carefully curated selection of premium
                beans, sourced from the world&apos;s most renowned coffee
                regions.
              </p>{" "}
              <p className="mt-4 md:text-[15px] text-[13px]">
                With expert craftsmanship and a commitment to quality, Join us
                in savoring the art of coffee, one cup at a time.
              </p>
            </div>
            <div className="btn mt-8">
              <button className="bg-[#2F1F14] px-12 py-2 text-white ">
                Read More
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Discover;
