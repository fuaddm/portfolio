"use client";
import Image from "next/image";
import skiingPic from "~/skiing.webp";
import skatingPic from "~/skating.webp";
import forestPic from "~/forest.webp";
import { motion } from "framer-motion";

const Images = () => {
  return (
    <motion.div
      initial={{
        translateY: "20px",
        opacity: 0,
      }}
      whileInView={{
        translateY: "0px",
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
        delay: 0.1,
      }}
      viewport={{ once: true }}
      className="container grid grid-cols-3 gap-6"
    >
      <div className="aspect-square w-full overflow-hidden rounded-[32px]">
        <Image
          src={skiingPic}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div className="aspect-square w-full overflow-hidden rounded-[32px]">
        <Image
          src={skatingPic}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div className="aspect-square w-full overflow-hidden rounded-[32px]">
        <Image
          src={forestPic}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
    </motion.div>
  );
};

export { Images };
