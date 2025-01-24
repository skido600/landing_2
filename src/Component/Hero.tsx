"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <>
      <main className="bg-[#2F1F14] mt-[-10px] px-4 ">
        <section className="md:flex items-center pt-3 justify-between">
          <div className="text-white ">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ duration: 0.3 }}
              className="font-Pompiere text-[40px]  lg:text-[70px]"
            >
              Coffee Makes Mood
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="font-Galada text-[15px] md:text-[20px]"
            >
              &quot;Indulge in Every Sip: Experience the Richness of
              Coffee!&quot;
            </motion.p>
          </div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <Image
              src="/svg/—Pngtree—coffee grains flying into cup_5057947.png"
              alt="coffe_image"
              width={600}
              height={600}
            />
          </motion.div>
        </section>
      </main>
    </>
  );
};

export default Hero;
