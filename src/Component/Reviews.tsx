"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

const Reviews: React.FC = () => {
  interface review {
    comment: string;
    commented: string;
  }
  const review: review[] = [
    {
      comment:
        "Indulge in the sublime experience of Coffee Borcelle, where every sip is a journey to flavor paradise. Crafted with precision, our rich blends ignite the senses and redefine coffee appreciation.",
      commented: "@elonmusk",
    },
    {
      comment:
        "Discover a world of taste with Coffee Brocelle. Each cup is a masterpiece, blending aromas and flavors that dance on your palate. Join us in celebrating coffee at its finest.",
      commented: "@JeffBezos",
    },
    {
      comment:
        "“Welcome to the heart and soul of coffee passion –Coffee Borcelle. Our carefully curated beans are an ode to craftsmanship, brewing a story of perfection in every cup.”",
      commented: "@MrBeast",
    },
  ];

  return (
    <>
      <main className="bg-[#655546] px-4 py-2">
        <section>
          <div className="text-center">
            <div className="flex items-center gap-x justify-center">
              <p className="text-white text-[30px] font-montserrat"> Reviews</p>{" "}
              <Image
                src="/svg/cup.svg"
                alt="coffe_image"
                width={60}
                height={60}
                className="mt-2 md:mt-0"
              />{" "}
            </div>

            <p className="font-Poppins text-white text-[20px]">
              What other people are saying!
            </p>
          </div>
          <motion.article className="grid md:grid-cols-3 gap-y-4 mt-12 gap-x-6">
            {review.map((item, index) => (
              <motion.section
                key={index}
                whileHover={{
                  scale: 0.8,
                  transition: { duration: 0.2 },
                }}
                whileTap={{
                  scale: 0.8,
                  transition: { duration: 0.2 },
                }}
                className="bg-[#DBBCA1] rounded-lg font-Poppins px-4 py-2 text-center"
              >
                <p className="text-[15px]">{item.comment}</p>
                <p className="text-[#0A424F] mt-4">{item.commented}</p>
              </motion.section>
            ))}
          </motion.article>
        </section>
      </main>
    </>
  );
};

export default Reviews;
