import React from "react";
import Image from "next/image";
const Hero: React.FC = () => {
  return (
    <>
      <main className="bg-[#2F1F14] mt-[-10px] px-4 ">
        <section className="md:flex items-center justify-between">
          <div className="text-white ">
            <h1 className="font-Pompiere text-[40px]  lg:text-[70px]">
              Coffee Makes Mood
            </h1>
            <p className="font-Galada text-[15px] md:text-[20px]">
              &quot;Indulge in Every Sip: Experience the Richness of
              Coffee!&quot;
            </p>
          </div>
          <div>
            <Image
              src="/svg/—Pngtree—coffee grains flying into cup_5057947.png"
              alt="coffe_image"
              width={600}
              height={600}
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default Hero;
