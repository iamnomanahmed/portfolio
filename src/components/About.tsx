import React from "react";
import { motion } from "framer-motion"
type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1 }}
    transition={{ duraton: 1.5 }}
      className="flex flex-col relative h-screen
     text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        src="https://i.ibb.co/rt1twzs/image.jpg"
        initial={{ x: -200 ,opacity:0 }}
        whileInView={{ x: 0 , opacity:1}}
        viewport={{ once: true }}
        transition={{ duraton: 1.2 }}
        className="-mb-20 md:mb-0 flex-shrink-0 w-52 h-52 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px] "
      />
      <div className="space-y-10  px-0 md:px-10">
        <h4 className="text-3xl font-semibold">
          Here is <span className="underline decoration-[#1fbe47]">little</span>{" "}
          bit Background
        </h4>
        <p className="text-base text-justify">
          I'm a versatile professional with skills in digital marketing,
          web/mobile app development, and graphic design. I excel in driving
          business growth through digital channels and optimizing campaigns with
          data-driven insights. I specialize in Facebook/Google Ads, SEO, email
          marketing, and social media. My development skills include TypeScript,
          React, Nextjs, Tailwind CSS, Chakra UI, and React Native for
          cross-platform mobile apps. As a graphic designer, I create logos,
          brand identities, marketing materials, and UI/UX designs with
          Photoshop, Illustrator, and Figma. I'm proficient in creating
          cost-effective mobile solutions, high-quality websites, and
          user-friendly designs.
        </p>{" "}
      </div>
    </motion.div>
  );
}
