"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
const Discover: React.FC = () => {
  const pRef = useRef<HTMLParagraphElement>(null);
  const pRefOne = useRef<HTMLParagraphElement>(null);
  const pRefTwo = useRef<HTMLParagraphElement>(null);
  const pRefdiv = useRef<HTMLDivElement>(null);

  const btn = useRef<HTMLButtonElement>(null);
  const pRefFour = useRef<HTMLParagraphElement>(null);
  //   const isInViewImg = useInView();
  const isInViewdiv = useInView(pRefdiv);
  const isInViewPara = useInView(pRef);
  const isInViewPara2 = useInView(pRefOne);
  const isInViewPara3 = useInView(pRefTwo);
  const isInViewPara5 = useInView(pRefFour);
  const btn_main = useInView(btn);

  return (
    <>
      <main className="bg-[#DBBCA1] px-2 pt-2 pb-6">
        <section className="flex flex-col-reverse md:flex-row justify-between mx-4 gap-x-6 lg:gap-x-0 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isInViewdiv ? 1 : 0,
              y: isInViewdiv ? 0 : 20,
            }}
            transition={{ duration: 0.5, delay: 0.3 }}
            ref={pRefdiv}
          >
            <Image
              src="/svg/coffee IMAGE.svg"
              alt="coffe_image"
              width={400}
              height={400}
              className="mt-4 md:mt-0"
            />
          </motion.div>
          <div className="md:w-[60%]">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isInViewPara ? 1 : 0,
                y: isInViewPara ? 0 : 20,
              }}
              transition={{ duration: 0.5, delay: 0.6 }}
              ref={pRef}
              className="text-[#220404] font-bold  text-[20px] lg:text-[30px] font-Poppins"
            >
              Discover Coffee Borcelle
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isInViewPara3 ? 1 : 0,
                y: isInViewPara3 ? 0 : 20,
              }}
              transition={{ duration: 0.5, delay: 0.9 }}
              ref={pRefOne}
              className="text-[#1B0B0BD9] text-[15px] md:text-[20px] mb-4 font-Poppins"
            >
              Elevating Your Coffee Experience
            </motion.p>
            <div className="text-[#000000]">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isInViewPara2 ? 1 : 0,
                  y: isInViewPara2 ? 0 : 20,
                }}
                transition={{ duration: 0.5, delay: 1.3 }}
                ref={pRefTwo}
                className="font-inter md:text-[15px] text-[13px]"
              >
                At Coffee Borcelle, we&apos;re on a mission to redefine your
                coffee moments. Our carefully curated selection of premium
                beans, sourced from the world&apos;s most renowned coffee
                regions.
              </motion.p>{" "}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isInViewPara5 ? 1 : 0,
                  y: isInViewPara5 ? 0 : 20,
                }}
                transition={{ duration: 0.5, delay: 1.6 }}
                ref={pRefFour}
                className="mt-4 md:text-[15px] font-inter text-[13px]"
              >
                With expert craftsmanship and a commitment to quality, Join us
                in savoring the art of coffee, one cup at a time.
              </motion.p>
            </div>
            <div className="btn mt-8">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: btn_main ? 1 : 0,
                  y: btn_main ? 0 : 20,
                }}
                transition={{ duration: 0.5, delay: 2.0 }}
                ref={btn}
                className="bg-[#2F1F14] px-12 py-2 text-white font-inter "
              >
                Read More
              </motion.button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Discover;
