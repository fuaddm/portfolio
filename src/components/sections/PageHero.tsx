"use client";

import { righteous } from "@/app/fonts";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { FC } from "react";

type PageHeroProps = {
  title: string;
  text: string;
  subText: string;
};

const PageHero: FC<PageHeroProps> = ({ title, text, subText }) => {
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
      className="container flex flex-col gap-4 pb-20 pt-10"
    >
      <div
        className={cn({
          "text-[60px] font-normal leading-[1.3] text-white": true,
          [righteous.className]: true,
        })}
      >
        {title}
      </div>
      <div className="max-w-[720px] text-[32px] leading-tight text-white">{text}</div>
      <div className="max-w-[720px] text-base font-normal text-[rgb(145,145,145)]">{subText}</div>
    </motion.div>
  );
};

export { PageHero };
