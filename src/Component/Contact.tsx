"use client";
import Image from "next/image";
import SvgIcons from "./SvgIcons";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Contact: React.FC = () => {
  const section = useRef<HTMLDivElement>(null);

  const isInViewsec = useInView(section);

  return (
    <main className="bg-[#291600] p-3">
      <motion.section
        ref={section}
        className="grid md:grid-cols-3 justify-center"
        initial={{ scale: 0.2 }} // Initial scale of the section
        animate={{
          scale: isInViewsec ? 1 : 0.8, // Scale up when in view
          transition: { duration: 0.8 }, // Smooth transition
        }}
      >
        <div className="contact font-inter mb-6">
          <h1 className=" text-white text-[30px] font-bold">Contact us</h1>
          <p className="text-[#786D5F]">Send us a message</p>
          <form action="#" className="flex flex-col gap-y-4">
            <input
              type="text"
              placeholder="Full name"
              className="w-[70%]  focus:outline-none py-1 px-3"
            />
            <input
              type="email"
              placeholder="Your email"
              className="w-[70%] focus:outline-none py-1 px-3"
            />
            <textarea
              name="body"
              placeholder="Your Message"
              className="w-[80%] focus:outline-none py-1 px-3"
            ></textarea>
          </form>
          <div className="btn mt-2">
            <button className="bg-[#DBBCA1] px-4 py-2 cursor-pointer rounded-[13px]">
              Submit
            </button>
          </div>
        </div>
        <div className="sitemap font-inter text-white">
          <h1 className="font-inter text-white text-[30px] font-bold">
            Sitemap
          </h1>
          <p className="text-[#786D5F]">All our pages</p>
          <ul className="text-[20px]">
            <li>-Home</li>
            <li>-About Us</li>
            <li>-Feature</li>
            <li>-Pricing</li>
            <li>-Contact Us</li>
          </ul>
        </div>
        <div className="connect font-inter">
          <Image
            src="/svg/Borcelle__2_-removebg-preview 1.svg"
            alt="hero_image"
            width={200}
            height={200}
          />
          <a href="https://wa.me/23" target="_blank" rel="noopener noreferrer">
            <div className="flex items-center space-x-2 text-white">
              <div>
                <SvgIcons type="phone" width={20} height={20} />
              </div>
              <div>
                <p className="">(+234)9065849502</p>
              </div>
            </div>
          </a>
          <a
            href="mailto:ebisileonard@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center space-x-2 text-white">
              <div>
                <SvgIcons type="message" width={20} height={20} />
              </div>
              <div>
                <p>ebisileonard@gmail.com</p>
              </div>
            </div>
          </a>
        </div>
      </motion.section>
    </main>
  );
};

export default Contact;
