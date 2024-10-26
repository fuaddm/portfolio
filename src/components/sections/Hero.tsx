"use client";
import { righteous } from "@/app/fonts";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      initial={{
        translateY: "40px",
        opacity: 0,
      }}
      whileInView={{
        translateY: "0px",
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      viewport={{ once: true }}
      className="container pb-20 pt-24"
    >
      <div className="flex flex-col gap-6">
        <HireMe />
        <Greeting />
        <SubText />
      </div>
    </motion.div>
  );
};

const HireMe = () => {
  return (
    <div className="flex w-fit items-center gap-2.5 rounded-full border-t border-[rgb(66,66,66)] bg-[rgb(26,26,26)] px-4 py-2">
      <div className="h-2.5 w-2.5 rounded-full bg-[rgb(111,173,97)]"></div>
      <div className="text-sm font-medium text-white">Available for hire</div>
    </div>
  );
};

const Greeting = () => {
  return (
    <div
      className={cn({
        "text-[42px] font-normal leading-[1.3] text-white md:text-[54px] xl:text-6xl": true,
        [righteous.className]: true,
      })}
    >
      Hi, I&apos;m Fuad,
      <br />a frontend developer
      <br /> from Azerbaijan 🇦🇿
    </div>
  );
};

const SubText = () => {
  return (
    <div className="text-base font-normal text-[rgb(145,145,145)] xl:max-w-[720px]">
      With a background in industrial design and a keen eye for detail, I excel at transforming concepts into tangible realities by seamlessly integrating aesthetics with practical functionality.
    </div>
  );
};

export { Hero };
